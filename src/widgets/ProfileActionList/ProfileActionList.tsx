import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ActionItem {
  label: string;
  count: number;
  color: string; // e.g., 'green', 'orange'
}

interface ProfileActionListProps {
  actions: ActionItem[];
}

const colorMap: Record<string, string> = {
  green: 'bg-green-500',
  orange: 'bg-orange-400',
  gray: 'bg-gray-300',
};

const ProfileActionList: React.FC<ProfileActionListProps> = ({ actions }) => {
  return (
    <div className="bg-white rounded-xl shadow w-full max-w-md mt-4 divide-y divide-[#F0F0F0]">
      {actions.map((action, idx) => (
        <div key={action.label} className="flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <span className={`w-4 h-4 rounded-full ${colorMap[action.color] || 'bg-gray-300'}`}></span>
            <span className="font-bold text-base text-black">{action.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5] text-[#232323] font-bold text-lg">{action.count}</span>
            <ChevronDownIcon className="w-6 h-6 text-[#B0B0B0]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileActionList; 