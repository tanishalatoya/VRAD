import React from 'React';
import { render, fireEvent } from '@testing-library/react';
import UserLogin from '../src/components/Login/login.js';

describe('User Login', () => {
  it('sends the correct data', () => {
    const mockLogin = jest.fn();

    const {debug, getByPlaceholderText, getByText} = render(<Form addIdea={mockAddIdea} />);

    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Trond'}});
    fireEvent.change(getByPlaceholderText('email'), {target: {value: 'trondation@gmail.com'}});
    fireEvent.change(getByPlaceholderText('please select reason') {target: {value: 'business'}})
    fireEvent.click(getByText('Login'));

    expect(mockLogin).toHaveBeenCalledWith({name: "Trond", email: "trondation@gamil.com", reason: "business"});
  })
})
