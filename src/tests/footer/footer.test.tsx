import { render, screen } from '@testing-library/react';

import {
  footerSocialsLinks,
  shopCategoriesLinks,
  shopCollectionsLinks,
} from '@/lib/constants';

import Footer from '@/components/footer/footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the logo', () => {
    const logo = screen.getByAltText("Stylenest's logo");
    expect(logo).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    const tagline = screen.getByText(
      'Craft stunning style journeys that weave more joy into every thread.',
    );
    expect(tagline).toBeInTheDocument();
  });

  it('renders shop categories section', () => {
    const categoryHeader = screen.getByText('Shop categories');
    expect(categoryHeader).toBeInTheDocument();

    shopCategoriesLinks.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders shop collections section', () => {
    const collectionsHeader = screen.getByText('Shop collections');
    expect(collectionsHeader).toBeInTheDocument();

    shopCollectionsLinks.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('renders the footer form', () => {
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('renders social media links', () => {
    footerSocialsLinks.forEach((link) => {
      const linkElement = screen.getByTestId(link.name + 'Icon');
      expect(linkElement).toBeInTheDocument();
    });
  });
});
