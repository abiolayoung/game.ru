'use client';

import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

interface ProfileActionsProps {
  location: string;
  onEdit: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ location, onEdit }) => {
  return (
    <div className="flex items-center justify-center gap-3 w-full max-w-md mt-2 mb-2">
      <span className="bg-white rounded-full px-6 py-2 text-base font-medium text-[#232323] shadow border border-[#E0E0E0]">{location}</span>
      <button
        className="flex items-center justify-center gap-1 w-auto h-10 border border-[#E0E0E0] rounded-full bg-white shadow hover:bg-gray-100 transition px-4"
        onClick={onEdit}
        aria-label="Редактировать"
      >
        <Cog6ToothIcon className="w-6 h-6 text-[#B0B0B0]" />
        <span className="text-[#B0B0B0] font-semibold text-base">РЕДАКТ</span>
      </button>
    </div>
  );
};

export default ProfileActions; 