'use client';

import dynamic from 'next/dynamic';

const StudentProfileView = dynamic(() => import('@/views/student/profile'));

export default function ProfilePage() {
  return <StudentProfileView />;
}
