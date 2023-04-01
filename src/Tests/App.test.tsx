import React from 'react';
import {render, screen} from '@testing-library/react';
import {AppStyled} from "../Main/app.style";

test('renders learn react link', () => {
    render(<AppStyled/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
