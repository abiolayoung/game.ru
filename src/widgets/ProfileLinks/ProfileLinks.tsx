import React from 'react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

interface LinkItem {
  label: string;
  isExit?: boolean;
  icon?: React.ReactNode;
}

interface ProfileLinksProps {
  links: LinkItem[];
}

const ProfileLinks: React.FC<ProfileLinksProps> = ({ links }) => {
  const regularLinks = links.filter(link => !link.isExit);
  const exitLink = links.find(link => link.isExit);

  return (
    <>
      <div className="bg-[#F8F8F8] rounded-xl shadow-none p-2 w-full max-w-md mt-4 divide-y divide-[#E0E0E0]">
        {regularLinks.map((link, idx) => (
          <div key={link.label} className="flex items-center gap-2 py-3">
            <span className="w-2 h-2 rounded-full bg-[#B0B0B0] inline-block"></span>
            <span className={`text-base text-black`}>{link.label}</span>
          </div>
        ))}
      </div>
      {exitLink && (
        <div className="bg-white rounded-2xl shadow-none p-3 w-full max-w-md mt-3 flex items-center gap-3">
          <ArrowLeftOnRectangleIcon className="w-6 h-6 text-red-500" />
          <span className="text-base text-red-500 font-semibold">{exitLink.label}</span>
        </div>
      )}
    </>
  );
};

export default ProfileLinks; 