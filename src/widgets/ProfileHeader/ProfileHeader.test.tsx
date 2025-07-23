import { render, screen } from '@testing-library/react';
import ProfileHeader from './ProfileHeader';

describe('ProfileHeader', () => {
  it('renders name, nickname, and avatar', () => {
    render(
      <ProfileHeader
        avatarUrl="/avatar.png"
        name="Ваня Петькин"
        nickname="nickname"
        status="Вчера 18.00"
      />
    );
    expect(screen.getByText('Ваня Петькин')).toBeInTheDocument();
    expect(screen.getByText('@nickname')).toBeInTheDocument();
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
}); 