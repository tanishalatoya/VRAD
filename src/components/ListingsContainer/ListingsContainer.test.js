import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { componentDidMount } from '../../App';
jest.mock('../../App');


it('Can view listings', async () => {

  componentDidMount.mockResolvedValueOnce([
      {id: 3, name: 'Hip RiNo Party Spot', address1: '2250 Lawrence St', address2: '80205'},
      {id: 44, name: 'Lowkey Industrial Chic', address1: '2441 Broadway Ave', address2: '80205'}
    ]);

  const { getByText } = render(<BrowserRouter>
    <ListingsContainer />
    </BrowserRouter>
  );

  const listingsCard = await waitFor(() => getByText('Hip RiNo Party Spot'));
  const listingsContainer = getByText("Listings Component");

  expect(ideasContainer).toBeInTheDocument();
  expect(listingsCard).toBeInTheDocument();
});
