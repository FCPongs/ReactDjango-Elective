import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PetProfileContainer from '../Components/PetProfileContainer';

describe('PetProfileContainer', () => {
  test('renders pet name correctly', () => {
    render(
      <Router>
        <PetProfileContainer />
      </Router>
    );

    const petName = screen.getByText('Cali');
    expect(petName).toBeInTheDocument();
  });

  test('renders adopt button correctly', () => {
    render(
      <Router>
        <PetProfileContainer />
      </Router>
    );

    const adoptButton = screen.getByText('Adopt');
    expect(adoptButton).toBeInTheDocument();
  });
});