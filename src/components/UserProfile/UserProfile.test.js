import React from 'React';
import UserProfile from './UserProfile';
import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UserProfile', () => {
  it('should render a user\'s profile to the page', ()=> {
    const { queryByText, findByText } = render(<BrowserRouter>
        <UserProfile user={'Willy Wonka'}/>
      </BrowserRouter>)

      const userName = findByText('Willy Wonka')
      expect(userName).toBeDefined();
  });
});
