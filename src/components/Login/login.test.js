import React from 'React';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserLogin from './login';

describe('User Login', () => {
  it('sends the correct data', () => {
    const mockSetUserInfo = jest.fn();


    const {debug, getByPlaceholderText, getByText, getByLabelText} = render(
      <BrowserRouter>
        <UserLogin setUserInfo={mockSetUserInfo} />
      </BrowserRouter>
    );

    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
    fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gmail.com'}});
    fireEvent.change(getByLabelText('Reason for visit'), {target: {value: 'business'}})
    fireEvent.click(getByText('Login'));
    expect(document.querySelector('a').getAttribute('href')).toBe('/areas')
  })
})
