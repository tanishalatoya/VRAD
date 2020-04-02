import React from 'React';
import Areas from './Areas';
import { BrowserRouter } from 'react-router-dom';
import { render, debug } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Areas', () => {
  it('should render area cards to the page with the correct information', ()=> {
    const { getByText, findByText, debug } = render(<BrowserRouter>
      <Areas
        areaNickname={'SoHo'}
        name={'South of Houston Street'}
        location={'Manhattan'}
        about={'Known for it\'s risque vibe'}
      /></BrowserRouter>)

    const nickName = findByText('SoHo');
    const location = getByText('Manhattan');
    const name = getByText('South of Houston Street');
    const about = getByText('Known for it\'s risque vibe')

    expect(nickName).toBeDefined();
    expect(location).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });
});
