'use client';

import dynamic from 'next/dynamic';

const BookmarksExplorer = dynamic(() => import('@/views/student/bookmarks'));

export default function BookmarksPage() {
  return <BookmarksExplorer />;
}
