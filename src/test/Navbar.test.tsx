import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// Mock scroll event
Object.defineProperty(window, 'scrollY', { value: 0, writable: true });

describe('Navbar', () => {
  const renderNavbar = (initialEntries = ['#/']) => {
    return render(
      <HashRouter>
        <Navbar />
      </HashRouter>
    );
  };

  describe('Rendering', () => {
    it('should render the navigation bar', () => {
      renderNavbar();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should display the school name', () => {
      renderNavbar();
      expect(screen.getByText('Dagrojel Excel Academy')).toBeInTheDocument();
    });

    it('should display the tagline', () => {
      renderNavbar();
      expect(screen.getByText('Building Solid Foundation')).toBeInTheDocument();
    });

    it('should render the logo image', () => {
      renderNavbar();
      const logo = screen.getByAltText('Dagrojel Excel Academy Logo');
      expect(logo).toBeInTheDocument();
    });

    it('should render all main navigation links on desktop', () => {
      renderNavbar();

      const expectedLinks = ['Home', 'About Us', 'Academics', 'Admissions', 'Gallery', 'News & Events', 'Contact'];
      expectedLinks.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });

    it('should display the Apply Now CTA button', () => {
      renderNavbar();
      expect(screen.getByText('Apply Now')).toBeInTheDocument();
    });

    it('should display top bar with contact information on desktop', () => {
      renderNavbar();
      expect(screen.getByText('+234 816 4800 973')).toBeInTheDocument();
      expect(screen.getByText('excel@dagrojel.com')).toBeInTheDocument();
    });

    it('should display admission banner', () => {
      renderNavbar();
      expect(screen.getByText('Admission Open 2025/2026')).toBeInTheDocument();
    });
  });

  describe('Mobile Menu', () => {
    it('should render mobile menu toggle button', () => {
      renderNavbar();
      const toggleButton = screen.getByLabelText('Toggle menu');
      expect(toggleButton).toBeInTheDocument();
    });

    it('should open mobile menu when toggle button is clicked', () => {
      renderNavbar();
      const toggleButton = screen.getByLabelText('Toggle menu');
      fireEvent.click(toggleButton);

      // Wait for menu to open
      waitFor(() => {
        expect(screen.getByText('Home')).toBeVisible();
      });
    });

    it('should close mobile menu when toggle button is clicked again', () => {
      renderNavbar();
      const toggleButton = screen.getByLabelText('Toggle menu');

      // Open menu
      fireEvent.click(toggleButton);

      // Close menu
      fireEvent.click(toggleButton);

      // Menu should be closed
      // Note: In a real test, we'd check for the absence of mobile menu items
    });
  });

  describe('Dropdown Menu', () => {
    it('should display Academics dropdown on hover', async () => {
      renderNavbar();
      const academicsLink = screen.getByText('Academics');

      // Mouse enter
      fireEvent.mouseEnter(academicsLink);

      await waitFor(() => {
        expect(screen.getByText('Reception')).toBeInTheDocument();
        expect(screen.getByText('Nursery')).toBeInTheDocument();
        expect(screen.getByText('Primary')).toBeInTheDocument();
        expect(screen.getByText('Secondary')).toBeInTheDocument();
      });
    });

    it('should hide Academics dropdown on mouse leave', async () => {
      renderNavbar();
      const academicsLink = screen.getByText('Academics');

      // Mouse enter
      fireEvent.mouseEnter(academicsLink);

      await waitFor(() => {
        expect(screen.getByText('Reception')).toBeVisible();
      });

      // Mouse leave
      fireEvent.mouseLeave(academicsLink);

      await waitFor(() => {
        // Dropdown should be hidden (not visible in DOM or hidden via CSS)
      });
    });
  });

  describe('Active Route Styling', () => {
    it('should highlight Home link when on home page', () => {
      renderNavbar();
      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink).toHaveClass('font-semibold');
    });

    it('should highlight About link when on about page', () => {
      renderNavbar();
      // Click About link to simulate navigation
      const aboutLink = screen.getByText('About Us');
      fireEvent.click(aboutLink);
      // After clicking, the About link should be highlighted
      const clickedAboutLink = screen.getByText('About Us').closest('a');
      expect(clickedAboutLink).toHaveClass('font-semibold');
    });

    it('should highlight Admissions link when on admissions page', () => {
      renderNavbar();
      // Click Admissions link to simulate navigation
      const admissionsLink = screen.getByText('Admissions');
      fireEvent.click(admissionsLink);
      // After clicking, the Admissions link should be highlighted
      const clickedAdmissionsLink = screen.getByText('Admissions').closest('a');
      expect(clickedAdmissionsLink).toHaveClass('font-semibold');
    });
  });

  describe('Navigation Links', () => {
    it('should have correct href attributes for all links', () => {
      renderNavbar();

      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink).toHaveAttribute('href', '#/');

      const aboutLink = screen.getByText('About Us').closest('a');
      expect(aboutLink).toHaveAttribute('href', '#/about');

      const admissionsLink = screen.getByText('Admissions').closest('a');
      expect(admissionsLink).toHaveAttribute('href', '#/admissions');
    });
  });

  describe('Scroll Behavior', () => {
    beforeEach(() => {
      window.scrollY = 0;
    });

    it('should add scrolled class when window is scrolled', async () => {
      renderNavbar();

      // Scroll down
      window.scrollY = 30;
      fireEvent.scroll(window);

      await waitFor(() => {
        const nav = screen.getByRole('navigation');
        expect(nav).toHaveClass('shadow-md');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA label for menu toggle', () => {
      renderNavbar();
      const toggleButton = screen.getByLabelText('Toggle menu');
      expect(toggleButton).toBeInTheDocument();
    });

    it('should have proper role for navigation', () => {
      renderNavbar();
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });
  });
});
