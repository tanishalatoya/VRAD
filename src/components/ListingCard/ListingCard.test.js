import React from 'React';
import { ListingCard } from '../ListingCard/ListingCard.js';

import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Listings', () => {
  it('should render listing cards to the page with the correct information', ()=> {
    const { getByText, findByText, debug } = render(<BrowserRouter>
      <ListingCard
        ListingName={'Hip RiNo Party Spot'}
        listingAddress1={'2250 Lawrence St'}
        listingAddress2={'80205'}
      /></BrowserRouter>)

    const name = findByText('Hip RiNo Party Spot');
    const address1 = getByText('Street: 2250 Lawrence St');
    const address2 = getByText('Zip Code: 80205')

    expect(name).toBeDefined();
    expect(address1).toBeInTheDocument();
    expect(address2).toBeInTheDocument();
  });
});
