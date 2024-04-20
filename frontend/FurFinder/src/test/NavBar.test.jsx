import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar Component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText, debug } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(getByAltText('Logo')).toBeInTheDocument();
    expect(getByText('FurFinder')).toBeInTheDocument();
    debug(); // Inspect the rendered DOM
  });

  it('toggles dropdown menu correctly', () => {
    const { getByText, getByTestId, debug } = render(
      <Router>
        <NavBar />
      </Router>
    );
    const dropdownButton = getByText('Manage pets');
    const dropdownMenu = getByTestId('dropdown-menu');

    expect(dropdownMenu).toBeVisible();

    fireEvent.click(dropdownButton);
    expect(dropdownMenu).toBeVisible();
  });
});