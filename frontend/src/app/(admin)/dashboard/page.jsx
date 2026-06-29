'use client';

import dynamic from 'next/dynamic';
import useAuth from '@/hooks/useAuth';

const AdminDashboard = dynamic(() => import('@/views/admin/dashboard'));
const StudentDashboard = dynamic(() => import('@/views/student/dashboard'));

/***************************  DASHBOARD SWITCHER  ***************************/

export default function DashboardPages() {
  const { role } = useAuth();

  if (role === 'STUDENT') {
    return <StudentDashboard />;
  }

  return <AdminDashboard />;
}
