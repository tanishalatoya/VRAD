import React from 'React';
import ListingCard from './ListingCard.js';
import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Listings', () => {
  it('should render listing cards to the page with the correct information', ()=> {
    const { getByText, debug } = render(<BrowserRouter>
      <ListingCard
        ListingName={'Hip RiNo Party Spot'}
        listingAddress1={'2250 Lawrence St'}
        listingAddress2={'80205'}
      /></BrowserRouter>)

    const name = getByText('Hip RiNo Party Spot');
    const address1 = getByText('Street: 2250 Lawrence St');
    const address2 = getByText('80205')

    expect(name).toBeInTheDocument();
    expect(address1).toBeInTheDocument();
    expect(address2).toBeInTheDocument();
  });
});
