'use client';

import dynamic from 'next/dynamic';

const AchievementsLeaderboard = dynamic(() => import('@/views/student/achievements'));

export default function AchievementsPage() {
  return <AchievementsLeaderboard />;
}
