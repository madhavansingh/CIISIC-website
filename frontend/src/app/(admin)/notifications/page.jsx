'use client';

import dynamic from 'next/dynamic';

const NotificationsCenter = dynamic(() => import('@/views/student/notifications'));

export default function NotificationsPage() {
  return <NotificationsCenter />;
}
