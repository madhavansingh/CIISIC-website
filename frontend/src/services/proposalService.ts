import { Proposal, ProposalStatus, ProposalVersion } from '@/types/studentPortal';

const DEFAULT_PROPOSALS: Proposal[] = [
  {
    id: 'pr1',
    challengeId: 'ch1',
    challengeTitle: 'Smart Hydration Grid for Agro-Crops',
    companyName: 'TATA AgriTech Solutions',
    studentId: 'dev-user-id',
    studentName: 'Madhavan Singh',
    title: 'Smart Crop Scheduling & Soil Sensors IoT Hub',
    description: 'An integrated micro-controller setup sending periodic soil hydrate levels via MQTT channels to an Express Node backend server. Highlights agricultural dashboards inside Next.js with crop watering timers.',
    technicalApproach: '1. Sensor Node: Build ESP32 simulator publishing humidity feeds.\n2. Server: Node/Express listener piping values to MongoDB Timeseries collection.\n3. Frontend: React charts showing real-time trends and hydration schedule updates.\n4. Verification: Coordinate with the LNCT lab team to hook physical boards.',
    fileUrl: '#',
    fileName: 'Crop_Hydration_IoT_Architecture.pdf',
    status: 'UNDER_REVIEW',
    submissionDate: '2026-06-15T10:00:00Z',
    feedback: 'Excellent IoT system outline. Dr. Vivek Mishra (Excellence Coordinator) has approved the sensor board schematic. Amit Saxena from TATA SPOC requested to evaluate the MQTT latency. Please verify if your system is compatible with the Tata internal hub.',
    verificationStatus: 'APPROVED',
    versionHistory: [
      {
        version: 1,
        submissionDate: '2026-06-15T10:00:00Z',
        fileUrl: '#',
        fileName: 'Crop_Hydration_IoT_Architecture.pdf',
        description: 'Initial architectural layout and sensor specifications.'
      }
    ],
    comments: [
      {
        id: 'c1',
        authorName: 'Dr. Vivek Mishra',
        authorRole: 'Academic Coordinator',
        content: 'Verified the ESP32 hardware layout in the lab. Looks solid and ready for deployment.',
        createdAt: '2026-06-16T14:20:00Z'
      },
      {
        id: 'c2',
        authorName: 'Amit Saxena',
        authorRole: 'Industry SPOC (TATA)',
        content: 'Please upload the database index blueprints. We need to evaluate write latency.',
        createdAt: '2026-06-18T10:00:00Z'
      }
    ]
  }
];

export class ProposalService {
  private static getProposalsList(): Proposal[] {
    if (typeof window === 'undefined') return DEFAULT_PROPOSALS;
    const item = localStorage.getItem('ciisic_proposals');
    if (!item) {
      localStorage.setItem('ciisic_proposals', JSON.stringify(DEFAULT_PROPOSALS));
      return DEFAULT_PROPOSALS;
    }
    try {
      return JSON.parse(item);
    } catch {
      return DEFAULT_PROPOSALS;
    }
  }

  private static setProposalsList(proposals: Proposal[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_proposals', JSON.stringify(proposals));
    }
  }

  static async getProposals(): Promise<Proposal[]> {
    return this.getProposalsList();
  }

  static async getProposalById(id: string): Promise<Proposal | null> {
    const list = this.getProposalsList();
    return list.find(p => p.id === id) || null;
  }

  static async submitProposal(proposal: Omit<Proposal, 'id' | 'submissionDate' | 'versionHistory' | 'comments' | 'verificationStatus'>): Promise<Proposal> {
    const list = this.getProposalsList();
    
    const newVersion: ProposalVersion = {
      version: 1,
      submissionDate: new Date().toISOString(),
      fileUrl: proposal.fileUrl,
      fileName: proposal.fileName,
      description: 'Initial submission version.'
    };

    const newProposal: Proposal = {
      ...proposal,
      id: `pr_${Date.now()}`,
      submissionDate: new Date().toISOString(),
      verificationStatus: 'PENDING',
      versionHistory: [newVersion],
      comments: []
    };

    list.push(newProposal);
    this.setProposalsList(list);
    return newProposal;
  }

  static async submitRevision(proposalId: string, fileUrl: string, fileName: string, description: string): Promise<Proposal | null> {
    const list = this.getProposalsList();
    let updatedProposal: Proposal | null = null;

    const updated = list.map(p => {
      if (p.id === proposalId) {
        const nextVersionNumber = p.versionHistory.length + 1;
        const newVersion: ProposalVersion = {
          version: nextVersionNumber,
          submissionDate: new Date().toISOString(),
          fileUrl,
          fileName,
          description
        };
        
        updatedProposal = {
          ...p,
          fileUrl,
          fileName,
          status: 'UNDER_REVIEW', // Reset to under review upon revision
          versionHistory: [...p.versionHistory, newVersion],
          comments: [
            ...(p.comments || []),
            {
              id: `comment_sys_${Date.now()}`,
              authorName: p.studentName,
              authorRole: 'Student',
              content: `Uploaded Revision Version ${nextVersionNumber}: ${description}`,
              createdAt: new Date().toISOString()
            }
          ]
        };
        return updatedProposal;
      }
      return p;
    });

    if (updatedProposal) {
      this.setProposalsList(updated);
    }
    return updatedProposal;
  }

  static async addProposalComment(proposalId: string, authorName: string, authorRole: string, content: string): Promise<Proposal | null> {
    const list = this.getProposalsList();
    let updatedProposal: Proposal | null = null;

    const updated = list.map(p => {
      if (p.id === proposalId) {
        const newComment = {
          id: `comment_${Date.now()}`,
          authorName,
          authorRole,
          content,
          createdAt: new Date().toISOString()
        };
        updatedProposal = {
          ...p,
          comments: p.comments ? [...p.comments, newComment] : [newComment]
        };
        return updatedProposal;
      }
      return p;
    });

    if (updatedProposal) {
      this.setProposalsList(updated);
    }
    return updatedProposal;
  }
}
