import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from '../UserProfile/UserProfile';
import { ListingsContainer } from '../ListingsContainer/ListingsContainer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ListingsContainer', () => {
  it('should render the listingsContainer to the page', () => {
    const { getByText } = render(<BrowserRouter>
      <UserProfile user={'Holly'}/>
      <ListingsContainer/>
      </BrowserRouter>
    );

    const userName = getByText('Holly');
    expect(userName).toBeInTheDocument();

    const listingTitle = getByText();
    expect(listingTitle).toBeInTheDocument();
  });
});
