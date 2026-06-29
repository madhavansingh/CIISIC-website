'use client';

import dynamic from 'next/dynamic';

const ProposalSubmissionWizard = dynamic(() => import('@/views/student/proposals/submit'));

export default function ProposalSubmissionPage() {
  return <ProposalSubmissionWizard />;
}
