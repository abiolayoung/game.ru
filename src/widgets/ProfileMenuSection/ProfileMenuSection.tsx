import React from 'react';
import { ClockIcon, EyeIcon, Bars3BottomLeftIcon, CheckIcon, XMarkIcon, BookmarkIcon } from '@heroicons/react/24/solid';

const menuGroups = [
  [
    { icon: <ClockIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'ИСТОРИЯ ВСТРЕЧ' },
  ],
  [
    { icon: <EyeIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'Публичный аккаун' },
    { icon: <Bars3BottomLeftIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'Взрослый' },
  ],
  [
    { icon: <CheckIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'Мои подписки' },
    { icon: <XMarkIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'Черный список' },
    { icon: <BookmarkIcon className="w-5 h-5 text-[#A7A7A7]" />, label: 'Закладки' },
  ],
];

const ProfileMenuSection: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3 mt-4">
      {/* Top buttons in a single card with 3px purple border and horizontal margin */}
      <div className="bg-white rounded-2xl flex flex-col overflow-hidden" style={{ border: '3px solid #A100FF', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
        <button className="w-full py-3 rounded-t-2xl bg-[#A100FF] text-white font-bold text-base shadow-none">СОЗДАТЬ ИГРУМ</button>
        <button className="w-full py-3 rounded-b-2xl border-t border-[#E0E0E0] border-b-0 border-x-0 text-[#A100FF] font-bold text-base bg-white shadow-none">МОИ ИГРУМЫ</button>
      </div>
      {/* Menu groups as separate cards */}
      {menuGroups.map((group, i) => (
        <div key={i} className="bg-white rounded-2xl flex flex-col divide-y divide-[#E0E0E0] mx-2">
          {group.map((item, j) => (
            <div key={item.label} className="flex items-center gap-3 px-4 py-3">
              {item.icon}
              <span className="text-base text-[#232323] font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileMenuSection; 