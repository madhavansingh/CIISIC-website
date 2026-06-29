import React from 'react';

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, showLabel = true }) => {
  return (
    <div className="w-full space-y-1.5">
      {showLabel && (
        <div className="flex items-center justify-between text-xs font-bold text-zinc-500">
          <span>Profile Strength</span>
          <span className="text-violet-600">{value}%</span>
        </div>
      )}
      <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-violet-500 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
