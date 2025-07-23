"use client";
import React from 'react';
import { Hydrate, dehydrate, QueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '@/entities/profile/api';
import ProfileHeader from '@/widgets/ProfileHeader/ProfileHeader';
import ProfileStats from '@/widgets/ProfileStats/ProfileStats';
import ProfileActions from '@/widgets/ProfileActions/ProfileActions';
import ProfileActionList from '@/widgets/ProfileActionList/ProfileActionList';
import ProfileMenuSection from '@/widgets/ProfileMenuSection/ProfileMenuSection';
import ProfileBioCard from '@/widgets/ProfileBioCard/ProfileBioCard';
import ProfileLinks from '@/widgets/ProfileLinks/ProfileLinks';

const links = [
  { label: 'Возможновти ИГРУМА' },
  { label: 'Правила ИГРУМА' },
  { label: 'Инструкция РУМЕРА' },
  { label: 'Инструкция МАСТЕРА' },
  { label: 'Инструкция МЕСТА' },
  { label: 'Пользовательское соглашение' },
  { label: 'Выйти из профиля', isExit: true },
];

const actions = [
  { label: 'ЗОВЫ', count: 2, color: 'green' },
  { label: 'ИДУ', count: 3, color: 'orange' },
];

export default function ProfileHydratedPage({ dehydratedState }: { dehydratedState: unknown }) {
  return (
    <Hydrate state={dehydratedState}>
      <ProfilePageContent />
    </Hydrate>
  );
}

function ProfilePageContent() {
  const { data: profile, isLoading, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });

  if (isLoading) {
    return <div className="w-full flex justify-center py-10 text-lg text-[#A100FF]">Загрузка...</div>;
  }
  if (isError || !profile) {
    return <div className="w-full flex justify-center py-10 text-lg text-red-500">Ошибка загрузки профиля</div>;
  }

  return (
    <div className="w-full flex justify-center py-4 px-2" style={{ background: '#E5E5E5' }}>
      <div className="w-full max-w-md bg-[#E5E5E5] rounded-2xl p-0 overflow-hidden">
        <ProfileHeader
          avatarUrl={profile.avatarUrl}
          name={profile.name}
          nickname={profile.nickname}
          status={profile.status || ''}
        />
        <ProfileStats
          gameDuration={profile.gameDuration}
          meetings={profile.meetings}
          followers={profile.followers}
        />
        <ProfileActions
          location={profile.location}
          onEdit={() => alert('Edit profile')}
        />
        <ProfileActionList actions={actions} />
        <ProfileMenuSection />
        <ProfileBioCard bio={profile.bio} telegram={profile.telegram} />
        <ProfileLinks links={links} />
      </div>
    </div>
  );
} 