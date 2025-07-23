import React from 'react';
import { EyeIcon, ShareIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface ProfileHeaderProps {
  avatarUrl: string;
  name: string;
  nickname: string;
  status: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatarUrl, name, nickname, status }) => {
  return (
    <div className="flex flex-col items-center gap-2 py-4 relative" style={{ background: '#E5E5E5' }}>
      <div className="flex items-center gap-4 relative w-full justify-center">
        {/* Left arrow icon absolutely positioned, higher and thicker, now a link */}
        <Link href="/" className="absolute left-0 top-6 cursor-pointer">
          <ArrowLeftIcon className="w-8 h-8 text-[#B0B0B0]" />
        </Link>
        {/* Avatar with yellow background and green P badge */}
        <div className="relative flex items-center justify-center">
          <div className="w-36 h-36 rounded-full bg-[#FFE600] flex items-center justify-center relative">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-32 h-32 object-contain"
              style={{ imageRendering: 'auto' }}
            />
            {/* Green P badge */}
            <span className="absolute -top-2 -left-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-base font-bold text-white shadow">P</span>
          </div>
        </div>
        {/* Vertical icon stack */}
        <div className="flex flex-col items-center gap-4 ml-2">
          <button className="flex flex-col items-center group">
            <ShareIcon className="w-7 h-7 text-gray-400 group-hover:text-gray-600" />
          </button>
          <div className="flex flex-col items-center">
            <EyeIcon className="w-7 h-7 text-gray-400" />
            <span className="text-[12px] text-gray-400 leading-none mt-1">Это я</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-7 h-7 flex items-center justify-center text-xl">😺</span>
            <span className="text-[12px] text-gray-400 leading-none mt-1">Котум</span>
          </div>
        </div>
      </div>
      {/* Name, nickname, status */}
      <div className="text-center mt-2">
        <div className="text-[15px] text-[#6B6B6B] font-normal mb-1">румер: <span className="text-black font-bold text-xl align-middle">{name}</span></div>
        <div className="flex justify-center gap-4 text-[#6B6B6B] text-sm font-medium">
          <span>@{nickname}</span>
          <span className="text-[#B0B0B0] font-normal">Вчера 18.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader; 