'use client';

import dynamic from 'next/dynamic';

const MessagesChat = dynamic(() => import('@/views/student/messages'));

export default function MessagesPage() {
  return <MessagesChat />;
}
