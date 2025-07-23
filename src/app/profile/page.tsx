import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchProfile } from '@/entities/profile/api';
import ProfileHydratedPage from './ProfileHydratedPage';

export default async function ProfilePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['profile'], queryFn: fetchProfile });
  const dehydratedState = dehydrate(queryClient);
  return <ProfileHydratedPage dehydratedState={dehydratedState} />;
} 