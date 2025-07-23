import axios from 'axios';
import { z } from 'zod';

export const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  nickname: z.string(),
  status: z.string().optional(),
  location: z.string(),
  gameDuration: z.string(),
  meetings: z.number(),
  followers: z.number(),
  avatarUrl: z.string().url(),
  bio: z.string(),
  telegram: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;

const API_URL = 'https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591';

const mockProfile: Profile = {
  id: '5e800be0-088e-41cb-b549-10ebf4a13591',
  name: 'Ваня Петькин',
  nickname: 'nickname',
  status: 'Вчера 18.00',
  location: 'Краснодар',
  gameDuration: '1 месяц',
  meetings: 15,
  followers: 350,
  avatarUrl: '/avatar.png',
  bio: 'Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с друзьями по вечера в Сицилии и зовем всех желающ и разные другие дела...',
  telegram: '@ribakit3',
};

export async function fetchProfile(): Promise<Profile> {
  try {
    const res = await axios.get(API_URL, { headers: { 'Accept': 'application/json' } });
    return ProfileSchema.parse(res.data);
  } catch (e) {
    return mockProfile;
  }
} 