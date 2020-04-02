import React from 'React';
import { ListingDetails } from '../ListingDetails/ListingDetails.js';
import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Details', () => {
  it('should render listing details to the page', ()=> {

    const mockDetails = jest.fn();

    const { getByText, findByText, debug } = render(<BrowserRouter>
      <ListingDetails
        currentListing={mockDetails}
      />
      </BrowserRouter>)
  });

  const listingName = getByText();
  expect().toBeInTheDocument();

  const numberOfBeds = getByText();
  expect().toBeInTheDocument();

  const numberOfBaths = getByText();
  expect().toBeInTheDocument();

  const cost = getByText();
  expect().toBeInTheDocument();
});
