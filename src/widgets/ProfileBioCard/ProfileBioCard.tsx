import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface ProfileBioCardProps {
  bio: string;
  telegram: string;
}

const ProfileBioCard: React.FC<ProfileBioCardProps> = ({ bio, telegram }) => {
  return (
    <div className="bg-white rounded-2xl p-4 w-full max-w-md mt-4 flex flex-col">
      <div className="flex items-center">
        <span className="text-sm text-[#232323] leading-snug truncate flex-1">
          {bio}
        </span>
        <ChevronRightIcon className="w-5 h-5 text-[#B0B0B0] ml-2 flex-shrink-0" />
      </div>
      <div className="flex justify-between items-center text-sm text-[#6B6B6B] border-t border-[#E0E0E0] pt-2 mt-2">
        <span>Мой телеграм</span>
        <span className="font-mono text-[#232323] font-bold">{telegram}</span>
      </div>
    </div>
  );
};

export default ProfileBioCard; 