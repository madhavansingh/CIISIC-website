import { Challenge } from '@/types/studentPortal';

const DEFAULT_CHALLENGES: Challenge[] = [
  {
    id: 'ch1',
    title: 'Smart Hydration Grid for Agro-Crops',
    description: 'Design and build an automated irrigation monitoring and crop scheduling dashboard utilizing local IoT sensors to prevent ground salination and conserve agricultural water supply.',
    companyName: 'TATA AgriTech Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&q=80',
    institutionName: 'LNCT Bhopal Excellence Cell',
    difficulty: 'MEDIUM',
    skillsRequired: ['React', 'Node.js', 'IoT Protocols', 'MongoDB'],
    techStack: ['React', 'Node.js', 'Express', 'Mongoose', 'MQTT Broker'],
    deliverables: [
      'Complete React client dashboard visualizing moisture sensors',
      'Node.js REST API with automated threshold notification webhooks',
      'Comprehensive PDF design schematic and system architecture diagram'
    ],
    timeline: {
      published: '2026-06-01T00:00:00Z',
      submissionDeadline: new Date(Date.now() + 15 * 86400000).toISOString(), // 15 days from now
      reviewCompleted: new Date(Date.now() + 30 * 86400000).toISOString()
    },
    attachments: [
      { name: 'Sensor_Specification_Data.pdf', url: '#', size: '2.4 MB' },
      { name: 'Tata_AgriTech_Irrigation_Guidelines.pdf', url: '#', size: '1.8 MB' }
    ],
    faqs: [
      { question: 'Is hardware simulation acceptable?', answer: 'Yes, a software simulation of sensory feeds via an MQTT mock script is fully acceptable.' },
      { question: 'Can students form groups?', answer: 'Proposals must be submitted individually, but you can consult your academic coordinators for mentorship.' }
    ],
    discussion: [
      { id: 'd1_1', authorName: 'Dr. Vivek Mishra', authorRole: 'Academic Coordinator', content: 'We will be setting up a physical sensor testbed in the college lab next Tuesday for student testing.', createdAt: '2026-06-15T09:00:00Z' },
      { id: 'd1_2', authorName: 'Amit Saxena', authorRole: 'Industry SPOC (TATA)', content: 'We are looking for solutions that scale well. Focus on optimizing the database indexes for sensor timelines.', createdAt: '2026-06-16T11:30:00Z' }
    ],
    status: 'OPEN',
    deadline: new Date(Date.now() + 15 * 86400000).toDateString(),
    bookmarkCount: 42,
    category: 'Internet of Things (IoT)',
    industry: 'Agriculture'
  },
  {
    id: 'ch2',
    title: 'SaaS Multi-Tenant Billing Gateway',
    description: 'Architect a highly secure, tenant-isolated subscription management engine and Stripe checkout adapter to allow SaaS tenants to dynamically provision pricing tiers and track subscription invoices.',
    companyName: 'Netlink Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&q=80',
    institutionName: 'CII Central Region Coordinator',
    difficulty: 'HARD',
    skillsRequired: ['Next.js', 'PostgreSQL', 'Stripe Billing', 'Node.js'],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Stripe API'],
    deliverables: [
      'Multi-tenant database schema diagram with Row Level Security (RLS)',
      'Working Stripe Webhook endpoint controller with event signature validation',
      'Tenant billing page UI showing active invoices and usage indicators'
    ],
    timeline: {
      published: '2026-06-05T00:00:00Z',
      submissionDeadline: new Date(Date.now() + 25 * 86400000).toISOString(), // 25 days from now
      reviewCompleted: new Date(Date.now() + 40 * 86400000).toISOString()
    },
    attachments: [
      { name: 'Stripe_Integration_Reqs.pdf', url: '#', size: '1.2 MB' }
    ],
    faqs: [
      { question: 'Do we need a live Stripe account?', answer: 'No, Stripe test mode credential integrations are fully sufficient.' }
    ],
    discussion: [],
    status: 'OPEN',
    deadline: new Date(Date.now() + 25 * 86400000).toDateString(),
    bookmarkCount: 28,
    category: 'Cloud Architecture',
    industry: 'Information Technology'
  },
  {
    id: 'ch3',
    title: 'Blockchain Supply Ledger for Pharma Track',
    description: 'Build a decentralized pharmaceutical ledger mapping vaccine drug supplies from warehouse to point-of-sale to prevent distribution of expired or fraudulent medicines.',
    companyName: 'Scope Global Skills Uni',
    companyLogo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=120&q=80',
    institutionName: 'CIISIC Central Regional Office',
    difficulty: 'HARD',
    skillsRequired: ['Solidity', 'Hardhat', 'Ethers.js', 'React'],
    techStack: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'IPFS'],
    deliverables: [
      'Tested Solidity smart contract mapping batch transfers and expiry flags',
      'Web interface demonstrating supply route transactions from a Metamask wallet',
      'Complete unit tests auditing edge conditions (expired batch blockages)'
    ],
    timeline: {
      published: '2026-06-10T00:00:00Z',
      submissionDeadline: new Date(Date.now() - 2 * 86400000).toISOString(), // Closed 2 days ago
      reviewCompleted: new Date(Date.now() + 10 * 86400000).toISOString()
    },
    attachments: [],
    faqs: [],
    discussion: [],
    status: 'CLOSED',
    deadline: new Date(Date.now() - 2 * 86400000).toDateString(),
    bookmarkCount: 15,
    category: 'Blockchain & DApps',
    industry: 'Healthcare'
  },
  {
    id: 'ch4',
    title: 'AI Conversational Health Assistant',
    description: 'Create an intelligent clinical routing chatbot that performs primary symptom inquiries and directs patients to respective medical facilities based on historical referral datasets.',
    companyName: 'Apollo Digital Care',
    companyLogo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&q=80',
    institutionName: 'AISECT Group Excellence Cell',
    difficulty: 'EASY',
    skillsRequired: ['Gemini API', 'FastAPI', 'Next.js', 'Vector Search'],
    techStack: ['Next.js', 'Python', 'FastAPI', 'Gemini SDK', 'ChromaDB'],
    deliverables: [
      'Working symptoms diagnostic agent built with Gemini structured prompt models',
      'Next.js chat window showing conversational logs and physician facility matches',
      'API routing endpoints returning matches in structured JSON format'
    ],
    timeline: {
      published: '2026-06-15T00:00:00Z',
      submissionDeadline: new Date(Date.now() + 8 * 86400000).toISOString(), // 8 days from now
      reviewCompleted: new Date(Date.now() + 20 * 86400000).toISOString()
    },
    attachments: [
      { name: 'Symptom_Dataset_Anonymized.xlsx', url: '#', size: '3.1 MB' }
    ],
    faqs: [
      { question: 'Is clinical validation required?', answer: 'No, this is a research-mode mock routing chatbot, clinical validation is not expected.' }
    ],
    discussion: [
      { id: 'd4_1', authorName: 'Prof. R. C. Rao', authorRole: 'Institutional SPOC', content: 'Excellent opportunity. Make sure your models handle spelling errors of local medical terminology.', createdAt: '2026-06-20T10:00:00Z' }
    ],
    status: 'OPEN',
    deadline: new Date(Date.now() + 8 * 86400000).toDateString(),
    bookmarkCount: 56,
    category: 'Artificial Intelligence',
    industry: 'Healthcare'
  }
];

export class ChallengeService {
  private static getChallengesList(): Challenge[] {
    if (typeof window === 'undefined') return DEFAULT_CHALLENGES;
    const item = localStorage.getItem('ciisic_challenges');
    if (!item) {
      localStorage.setItem('ciisic_challenges', JSON.stringify(DEFAULT_CHALLENGES));
      return DEFAULT_CHALLENGES;
    }
    try {
      return JSON.parse(item);
    } catch {
      return DEFAULT_CHALLENGES;
    }
  }

  private static setChallengesList(challenges: Challenge[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_challenges', JSON.stringify(challenges));
    }
  }

  static async getChallenges(): Promise<Challenge[]> {
    return this.getChallengesList();
  }

  static async getChallengeById(id: string): Promise<Challenge | null> {
    const list = this.getChallengesList();
    return list.find(c => c.id === id) || null;
  }

  static async getSavedChallenges(): Promise<Challenge[]> {
    const list = this.getChallengesList();
    const savedIds = this.getSavedIds();
    return list.filter(c => savedIds.includes(c.id));
  }

  static async toggleBookmark(id: string): Promise<boolean> {
    const savedIds = this.getSavedIds();
    const index = savedIds.indexOf(id);
    let bookmarked = false;
    
    if (index === -1) {
      savedIds.push(id);
      bookmarked = true;
    } else {
      savedIds.splice(index, 1);
    }
    
    this.setSavedIds(savedIds);

    // Update challenge bookmark counts
    const list = this.getChallengesList();
    const updated = list.map(c => {
      if (c.id === id) {
        return { ...c, bookmarkCount: bookmarked ? c.bookmarkCount + 1 : Math.max(0, c.bookmarkCount - 1) };
      }
      return c;
    });
    this.setChallengesList(updated);

    return bookmarked;
  }

  static isBookmarked(id: string): boolean {
    const savedIds = this.getSavedIds();
    return savedIds.includes(id);
  }

  private static getSavedIds(): string[] {
    if (typeof window === 'undefined') return [];
    const item = localStorage.getItem('ciisic_saved_challenge_ids');
    if (!item) return ['ch1']; // Seed one bookmark initially
    try {
      return JSON.parse(item);
    } catch {
      return [];
    }
  }

  private static setSavedIds(ids: string[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_saved_challenge_ids', JSON.stringify(ids));
    }
  }

  static async addDiscussionComment(challengeId: string, authorName: string, authorRole: string, content: string): Promise<Challenge | null> {
    const list = this.getChallengesList();
    let updatedChallenge: Challenge | null = null;

    const updated = list.map(c => {
      if (c.id === challengeId) {
        const newComment = {
          id: `disc_${Date.now()}`,
          authorName,
          authorRole,
          content,
          createdAt: new Date().toISOString()
        };
        const discussion = c.discussion ? [...c.discussion, newComment] : [newComment];
        updatedChallenge = { ...c, discussion };
        return updatedChallenge;
      }
      return c;
    });

    if (updatedChallenge) {
      this.setChallengesList(updated);
    }
    return updatedChallenge;
  }
}
