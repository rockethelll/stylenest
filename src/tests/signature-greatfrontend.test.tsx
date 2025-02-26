import SignatureGreatfrontend from '../components/signature-greatfrontend';
import { render, screen } from '@testing-library/react';

describe('SignatureGreatfrontend', () => {
  it('renders the component with correct text content', () => {
    render(<SignatureGreatfrontend />);

    expect(screen.getByText(/A challenge by/i)).toBeInTheDocument();
    expect(screen.getByText(/Built by/i)).toBeInTheDocument();
  });

  it('renders GreatFrontEnd Projects link with correct attributes', () => {
    render(<SignatureGreatfrontend />);

    const gfeLink = screen.getByText('GreatFrontEnd Projects');
    expect(gfeLink).toBeInTheDocument();
    expect(gfeLink).toHaveAttribute(
      'href',
      'https://www.greatfrontend.com/projects?ref=challenges',
    );
    expect(gfeLink).toHaveAttribute('target', '_blank');
    expect(gfeLink).toHaveClass('text-black', 'font-bold');
  });

  it('renders Rockethell link with correct attributes', () => {
    render(<SignatureGreatfrontend />);

    const authorLink = screen.getByText('Rockethell');
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute(
      'href',
      'https://www.greatfrontend.com/projects/u/rockethell',
    );
    expect(authorLink).toHaveAttribute('target', '_blank');
    expect(authorLink).toHaveClass('text-black', 'font-bold');
  });
});
