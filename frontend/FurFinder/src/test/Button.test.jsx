import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Components/Button';
import { describe, it } from '@jest/globals';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button buttonText="Adopt Me" />);
    const button = screen.getByText('Adopt Me');
    expect(button).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    render(<Button buttonText="Adopt Me" />);
    const button = screen.getByText('Adopt Me');

    // Test specific styling properties (e.g., background color, rounded corners)
    expect(button).toHaveStyle('background-color: #3f51b5');
    expect(button).toHaveStyle('border-radius: 0.5rem');
    // Add more style-related assertions as needed
  });

  it('shows hover effects', () => {
    render(<Button buttonText="Adopt Me" />);
    const button = screen.getByText('Adopt Me');

    // Simulate hover effect
    fireEvent.mouseEnter(button);

    // Test hover-specific styles (e.g., color change)
    expect(button).toHaveStyle('color: #ffffff');
    // Add more hover-related assertions as needed
  });
});