import { render, screen } from '@testing-library/react';
import ProfileBioCard from './ProfileBioCard';

describe('ProfileBioCard', () => {
  it('renders bio, telegram, and chevron', () => {
    const { container } = render(
      <ProfileBioCard
        bio="Test bio text"
        telegram="@testuser"
      />
    );
    expect(screen.getByText('Test bio text')).toBeInTheDocument();
    expect(screen.getByText('@testuser')).toBeInTheDocument();
    expect(screen.getByText('Мой телеграм')).toBeInTheDocument();
    // Check for SVG chevron icon
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
}); 