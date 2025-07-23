import { render, screen } from '@testing-library/react';
import ProfileStats from './ProfileStats';

describe('ProfileStats', () => {
  it('renders gameDuration, meetings, and followers', () => {
    render(
      <ProfileStats
        gameDuration="1 месяц"
        meetings={15}
        followers={350}
      />
    );
    expect(screen.getByText('1 месяц')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('350')).toBeInTheDocument();
    expect(screen.getByText('в игре')).toBeInTheDocument();
    expect(screen.getByText('встреч')).toBeInTheDocument();
    expect(screen.getByText('румеров')).toBeInTheDocument();
  });
}); 