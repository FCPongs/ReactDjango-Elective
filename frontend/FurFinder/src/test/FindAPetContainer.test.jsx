import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FindAPetContainer from '../Components/FindAPetContainer'
describe('FindAPetContainer Component', () => {
    it('renders without crashing', () => {
      render(
        <Router>
          <FindAPetContainer />
        </Router>
      );
      expect(screen.getByTestId('find-a-pet-container')).toBeInTheDocument();
    });
  
    it('renders Link to PetProfile page', () => {
      render(
        <Router>
          <FindAPetContainer />
        </Router>
      );
    });
  
    it('applies styles correctly', () => {
      render(
        <Router>
          <FindAPetContainer />
        </Router>
      );
   
    });
  
    it('applies hover effects correctly', () => {
      render(
        <Router>
          <FindAPetContainer />
        </Router>
      );
  
      const container = screen.getByTestId('find-a-pet-container');
      fireEvent.mouseEnter(container); 
    });
  });