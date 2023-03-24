import React from 'react';
import 'matchmedia-polyfill';

import "@testing-library/jest-dom";




import { render, screen } from '@testing-library/react';
import Carousel from '../components/Carousel'


jest.mock('use-media', () => () => false);

test('renders the carousel with mini images', () => {
  render(<Carousel />);
  
  // Check if the big image is displayed
  const bigImage = screen.getByAltText(/product shoes/i);
  
  // Check if the mini images are displayed
  const miniImages = screen.getAllByAltText(/mini product/i);
  
  expect(bigImage).toBeInTheDocument();
  expect(miniImages.length).toBeGreaterThan(0);
});