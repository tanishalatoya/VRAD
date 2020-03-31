import React from 'React';
import { render } from '@testing-library/react';

describe('Listing Container', () => {
  it('should render the listing cards to the page with the correct information', ()=> {
    const { getByText, findByText, debug } = render(<BrowserRouter>
      <ListingCard

      />
    )
  });
});
