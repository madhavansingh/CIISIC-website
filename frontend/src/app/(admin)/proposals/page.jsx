'use client';

import dynamic from 'next/dynamic';

const MyProposals = dynamic(() => import('@/views/student/proposals'));

export default function ProposalsPage() {
  return <MyProposals />;
}
