'use client';

import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import useAuth from '@/hooks/useAuth';

const AdminLayout = dynamic(() => import('@/layouts/AdminLayout'));
const StudentLayout = dynamic(() => import('@/layouts/StudentLayout'));

/***************************  LAYOUT - ADMIN & STUDENT  ***************************/

export default function Layout({ children }) {
  const { role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-zinc-50">
        <div className="w-8 h-8 rounded-full border-4 border-zinc-200 border-t-violet-600 animate-spin" />
      </div>
    );
  }

  if (role === 'STUDENT') {
    return <StudentLayout>{children}</StudentLayout>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

Layout.propTypes = { children: PropTypes.any };
