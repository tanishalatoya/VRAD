import React from 'React';
import AreasContainer from './AreasContainer';
import UserProfile from '../UserProfile/UserProfile'
import Areas from '../Areas/Areas'
import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Areas', () => {
  it('should render an AreasContainer to the page', ()=> {
    const { getByText, findByText, debug } = render(<BrowserRouter>
      <UserProfile user={'Holly'}/>
      <Areas />

      /></BrowserRouter>)

      //What do I even expect here??

  });
});
