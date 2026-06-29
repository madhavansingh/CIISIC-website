'use client';

import dynamic from 'next/dynamic';

const StudentSettings = dynamic(() => import('@/views/student/settings'));

export default function SettingsPage() {
  return <StudentSettings />;
}
