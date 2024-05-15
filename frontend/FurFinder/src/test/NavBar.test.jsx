import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Components/NavBar';

describe('NavBar', () => {
  test('renders logo and title correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const logo = screen.getByAltText('Logo');
    const title = screen.getByText('FurFinder');
    
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders navigation links correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About us');
    const contactLink = screen.getByText('Contact us');
    const findAPetLink = screen.getByText('Find a pet');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(findAPetLink).toBeInTheDocument();
  });

  test('opens and closes manage pets dropdown correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const managePetsButton = screen.getByText('Manage pets');

    // Dropdown should initially be closed
    expect(screen.queryByText('Add Pet')).not.toBeInTheDocument();

    // Clicking on the button should open the dropdown
    fireEvent.click(managePetsButton);
    expect(screen.getByText('Add Pet')).toBeInTheDocument();

    // Clicking again should close the dropdown
    fireEvent.click(managePetsButton);
    expect(screen.queryByText('Add Pet')).not.toBeInTheDocument();
  });
});