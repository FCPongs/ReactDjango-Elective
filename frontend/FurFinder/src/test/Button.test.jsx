
import React from 'react';
import { render } from '@testing-library/react';
import AdoptButton from '../Components/Button'; 

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<AdoptButton buttonText="Adopt Me" />);

  });

  it('displays the correct button text', () => {
    const { getByText } = render(<AdoptButton buttonText="Adopt Me" />);
    const buttonElement = getByText('Adopt Me');
    expect(buttonElement).toBeInTheDocument();
  });

});