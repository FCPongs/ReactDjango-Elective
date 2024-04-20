import React from 'react';
import { render, screen } from '@testing-library/react';
import PetProfileContainer from '../Components/PetProfileContainer'

describe('PetProfileContainer', () => {
  test('renders component with correct name', () => {
    render(<PetProfileContainer />);
    const nameElement = screen.getByText('Cali');
    expect(nameElement).toBeInTheDocument();
  });

  test('renders adopt button', () => {
    render(<PetProfileContainer />);
    const adoptButton = screen.getByRole('button', { name: /adopt/i });
    expect(adoptButton).toBeInTheDocument();
  });
});