import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Navbar from '@/components/navbar/navbar';

const resizeWindow = (width: number) => {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
};

describe('Feature: Mobile Menu', () => {
  // Reset window size after each test
  afterEach(() => {
    resizeWindow(1024);
  });

  describe('Desktop View (>= 1024px)', () => {
    beforeEach(() => {
      resizeWindow(1024);
    });

    it('should render the Stylenest logo', () => {
      render(<Navbar />);
      const logo = screen.getByAltText(/stylenest's logo/i);
      expect(logo).toBeInTheDocument();
    });

    it('should display navigation links', () => {
      render(<Navbar />);
      expect(screen.getByText('Shop all')).toBeVisible();
      expect(screen.getByText('Latest arrivals')).toBeVisible();
    });

    it('should not show mobile menu button', async () => {
      render(<Navbar />);
      const menuButton = screen.getByLabelText(/toggle mobile menu/i);

      // Force a layout recalculation
      await waitFor(() => {
        const styles = window.getComputedStyle(menuButton);
        const isHidden =
          styles.display === 'none' ||
          styles.visibility === 'hidden' ||
          menuButton.offsetParent === null;
        expect(isHidden).toBe(true);
      });
    });
  });

  describe('Tablet/Mobile View (< 1024px)', () => {
    beforeEach(() => {
      resizeWindow(768);
    });

    it('should hide desktop navigation by default', () => {
      render(<Navbar />);
      const desktopNav = screen.getByRole('navigation');
      expect(desktopNav).toHaveClass('hidden');
    });

    it('should display mobile menu button', () => {
      render(<Navbar />);
      const menuButton = screen.getByLabelText('Toggle Mobile Menu');
      expect(menuButton).toBeInTheDocument();
    });

    it('should show mobile menu with links when clicking menu button', async () => {
      render(<Navbar />);
      const menuButton = screen.getByLabelText('Toggle Mobile Menu');
      fireEvent.click(menuButton);

      // Wait for the mobile menu to be mounted and visible
      await waitFor(() => {
        const mobileNav = screen.getByRole('navigation', {
          name: /mobile menu/i,
        });
        expect(mobileNav).toBeInTheDocument();
      });

      // Check if the links are visible in the mobile menu
      const shopAllLink = screen.getAllByText('Shop all')[1]; // Get the one in mobile menu
      const latestArrivalsLink = screen.getAllByText('Latest arrivals')[1];

      expect(shopAllLink).toBeVisible();
      expect(latestArrivalsLink).toBeVisible();
    });

    it('should close mobile menu when clicking close button', async () => {
      render(<Navbar />);
      const menuButton = screen.getByLabelText('Toggle Mobile Menu');
      fireEvent.click(menuButton);

      await waitFor(() => {
        const closeButton = screen.getByLabelText('Close Mobile Menu');
        expect(closeButton).toBeInTheDocument();
      });

      const closeButton = screen.getByLabelText('Close Mobile Menu');
      fireEvent.click(closeButton);

      await waitFor(
        () => {
          const mobileNav = screen.queryByLabelText('Close Mobile Menu');
          expect(mobileNav).not.toBeInTheDocument();
        },
        { timeout: 400 },
      ); // Increased timeout to account for animation
    });
  });
});
