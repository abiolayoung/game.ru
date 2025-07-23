import React from 'react';

interface ProfileAboutProps {
  description: string;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ description }) => {
  return (
    <div className="bg-[#F8F8F8] rounded-xl shadow-none p-4 w-full max-w-md mt-4">
      <div className="text-sm text-[#232323] mb-2 leading-snug">{description}</div>
    </div>
  );
};

export default ProfileAbout; 