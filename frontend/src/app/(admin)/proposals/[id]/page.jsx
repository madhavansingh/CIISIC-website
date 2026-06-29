'use client';

import dynamic from 'next/dynamic';

const ProposalDetails = dynamic(() => import('@/views/student/proposals/details'));

export default function ProposalDetailsPage() {
  return <ProposalDetails />;
}
