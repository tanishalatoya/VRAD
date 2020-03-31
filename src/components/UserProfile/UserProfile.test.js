import React from 'react';
import UserProfile from './UserProfile';
import { BrowserRouter } from 'react-router-dom';
import { render, debug, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UserProfile', () => {
  it('should render a user\'s profile to the page', async ()=> {

    const user = {
      name: 'Willy',
      email: 'hello@world.com'
      reason: 'Vacation'
    }
    const { queryByText, findByText } = render(<BrowserRouter>
        <UserProfile
          name={'Willy Wonka'}
          email={'willyw@wonkafactory.com'}
          reason={'Vacation'}
        />
      </BrowserRouter>)

      const userName = await waitFor(() => getByText('Vacation'))
      expect(userName).toBeInTheDocument();
  });
});
