import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkIcon from './LinkIcon';

describe('<LinkIcon />', () => {
  test('it should mount', () => {
    render(<LinkIcon />);
    
    const linkIcon = screen.getByTestId('LinkIcon');

    expect(linkIcon).toBeInTheDocument();
  });
});