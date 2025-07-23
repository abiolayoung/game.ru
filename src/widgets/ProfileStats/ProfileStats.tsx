import React from 'react';

interface ProfileStatsProps {
  gameDuration: string;
  meetings: number;
  followers: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ gameDuration, meetings, followers }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-md px-6 py-3 mt-2 mb-2" style={{ background: '#E5E5E5' }}>
      <div className="flex flex-col items-center flex-1">
        <span className="text-lg font-bold leading-tight text-black">{gameDuration}</span>
        <span className="text-xs text-[#6B6B6B] mt-1">в игре</span>
      </div>
      <div className="w-1 h-10 bg-[#B0B0B0] mx-2 rounded-full" />
      <div className="flex flex-col items-center flex-1">
        <span className="text-lg font-bold leading-tight text-black">{meetings}</span>
        <span className="text-xs text-[#6B6B6B] mt-1">встреч</span>
      </div>
      <div className="w-1 h-10 bg-[#B0B0B0] mx-2 rounded-full" />
      <div className="flex flex-col items-center flex-1">
        <span className="text-lg font-bold leading-tight text-black">{followers}</span>
        <span className="text-xs text-[#6B6B6B] mt-1">румеров</span>
      </div>
    </div>
  );
};

export default ProfileStats; 