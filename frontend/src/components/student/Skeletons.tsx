import React from 'react';

export const CardSkeleton: React.FC = () => (
  <div className="w-full rounded-2xl border border-zinc-100 bg-white p-6 space-y-4 shadow-sm animate-pulse">
    <div className="flex items-center justify-between">
      <div className="h-6 w-20 bg-zinc-200 rounded-lg"></div>
      <div className="h-5 w-5 bg-zinc-100 rounded-full"></div>
    </div>
    <div className="space-y-2">
      <div className="h-6 w-3/4 bg-zinc-200 rounded-lg"></div>
      <div className="h-4 w-5/6 bg-zinc-100 rounded-lg"></div>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-zinc-200"></div>
      <div className="space-y-1">
        <div className="h-4 w-28 bg-zinc-200 rounded-md"></div>
        <div className="h-3 w-20 bg-zinc-100 rounded-md"></div>
      </div>
    </div>
    <div className="border-t border-zinc-50 pt-3 flex items-center justify-between">
      <div className="h-4 w-24 bg-zinc-100 rounded-md"></div>
      <div className="h-5 w-16 bg-zinc-200 rounded-full"></div>
    </div>
  </div>
);

export const ListSkeleton: React.FC = () => (
  <div className="w-full rounded-xl border border-zinc-100 bg-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-pulse">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-zinc-200 shrink-0"></div>
      <div className="space-y-2">
        <div className="h-5 w-48 bg-zinc-200 rounded-lg"></div>
        <div className="h-4 w-32 bg-zinc-100 rounded-md"></div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-8 w-20 bg-zinc-200 rounded-lg"></div>
      <div className="h-8 w-24 bg-zinc-100 rounded-lg"></div>
    </div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="space-y-3 w-full animate-pulse">
    <div className="grid grid-cols-4 gap-4 p-4 border-b border-zinc-100">
      <div className="h-4 bg-zinc-200 rounded"></div>
      <div className="h-4 bg-zinc-200 rounded"></div>
      <div className="h-4 bg-zinc-200 rounded"></div>
      <div className="h-4 bg-zinc-200 rounded"></div>
    </div>
    {[...Array(4)].map((_, i) => (
      <div key={i} className="grid grid-cols-4 gap-4 p-4 border-b border-zinc-50">
        <div className="h-4 bg-zinc-100 rounded"></div>
        <div className="h-4 bg-zinc-100 rounded"></div>
        <div className="h-4 bg-zinc-100 rounded"></div>
        <div className="h-4 bg-zinc-100 rounded"></div>
      </div>
    ))}
  </div>
);
