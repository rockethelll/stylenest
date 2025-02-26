import { render, screen } from '@testing-library/react';

import Navbar from '@/components/navbar';

describe('Navbar', () => {
  it('should render the Stylenest logo', () => {
    render(<Navbar />);

    const header = screen.getByAltText(/stylenest's logo/i);
    expect(header).toBeInTheDocument();
  });
});
