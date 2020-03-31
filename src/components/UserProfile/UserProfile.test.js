import React from 'react';
import UserProfile from './UserProfile';
import { BrowserRouter } from 'react-router-dom';
import { render, debug, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UserProfile', () => {
  it('should render a user\'s profile to the page', ()=> {

    const { getByText } = render(<BrowserRouter>
        <UserProfile
          user={
            {
            name: 'Willy',
            email: 'willy@wonkaville.com',
            reason: 'Business'
            }
          }
          />
      </BrowserRouter>)

    expect(getByText('Willy')).toBeInTheDocument();
    expect(getByText('willy@wonkaville.com')).toBeInTheDocument();
    expect(getByText('Business')).toBeInTheDocument();

  });
});
