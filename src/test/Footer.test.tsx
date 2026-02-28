import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '@/components/Footer';

describe('Footer', () => {
  const renderFooter = () => {
    return render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  };

  describe('Rendering', () => {
    it('should render the footer element', () => {
      renderFooter();
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should display the school name', () => {
      renderFooter();
      expect(screen.getByText('Dagrojel Excel Academy')).toBeInTheDocument();
    });

    it('should display the school tagline', () => {
      renderFooter();
      expect(screen.getByText('Building Solid Foundation')).toBeInTheDocument();
    });

    it('should render the logo image', () => {
      renderFooter();
      const logo = screen.getByAltText('Dagrojel Excel Academy');
      expect(logo).toBeInTheDocument();
    });

    it('should display school description', () => {
      renderFooter();
      expect(screen.getByText(/Nurturing minds and building character/)).toBeInTheDocument();
    });
  });

  describe('Quick Links Section', () => {
    it('should render Quick Links heading', () => {
      renderFooter();
      expect(screen.getByText('Quick Links')).toBeInTheDocument();
    });

    it('should render all quick link items', () => {
      renderFooter();

      const expectedLinks = [
        'About Us',
        'Academics',
        'Admissions',
        'Gallery',
        'News & Events',
        'Contact Us',
      ];

      expectedLinks.forEach(link => {
        // Use getAllByText since some links appear multiple times
        const elements = screen.getAllByText(link);
        expect(elements.length).toBeGreaterThan(0);
      });
    });

    it('should have correct href for each quick link', () => {
      renderFooter();

      // Find links by href instead of text to be more specific
      const aboutLink = screen.getAllByRole('link').find(link =>
        link.getAttribute('href') === '/about'
      );
      expect(aboutLink).toBeInTheDocument();

      const academicsLink = screen.getAllByRole('link').find(link =>
        link.getAttribute('href') === '/academics'
      );
      expect(academicsLink).toBeInTheDocument();

      const admissionsLink = screen.getAllByRole('link').find(link =>
        link.getAttribute('href') === '/admissions'
      );
      expect(admissionsLink).toBeInTheDocument();
    });
  });

  describe('Programmes Section', () => {
    it('should render Our Programmes heading', () => {
      renderFooter();
      expect(screen.getByText('Our Programmes')).toBeInTheDocument();
    });

    it('should render all programme links', () => {
      renderFooter();

      const expectedPrograms = [
        'Reception Programme',
        'Nursery Programme',
        'Primary School',
        'Secondary School',
      ];

      expectedPrograms.forEach(program => {
        expect(screen.getByText(program)).toBeInTheDocument();
      });
    });

    it('should have correct hash-based href for programme links', () => {
      renderFooter();

      const receptionLink = screen.getByText('Reception Programme').closest('a');
      expect(receptionLink).toHaveAttribute('href', '/academics#reception');

      const nurseryLink = screen.getByText('Nursery Programme').closest('a');
      expect(nurseryLink).toHaveAttribute('href', '/academics#nursery');

      const primaryLink = screen.getByText('Primary School').closest('a');
      expect(primaryLink).toHaveAttribute('href', '/academics#primary');

      const secondaryLink = screen.getByText('Secondary School').closest('a');
      expect(secondaryLink).toHaveAttribute('href', '/academics#secondary');
    });
  });

  describe('Contact Information Section', () => {
    it('should render Contact Us heading', () => {
      renderFooter();
      const contactUsHeadings = screen.getAllByText('Contact Us');
      expect(contactUsHeadings.length).toBeGreaterThan(0);
    });

    it('should display address', () => {
      renderFooter();
      expect(screen.getByText(/Along Road D, Aco Estate/)).toBeInTheDocument();
      expect(screen.getByText(/Airport Road, Abuja/)).toBeInTheDocument();
    });

    it('should display phone numbers', () => {
      renderFooter();
      // Find phone numbers within the footer specifically
      const phoneNumbers = screen.getAllByText('+234 816 4800 973');
      expect(phoneNumbers.length).toBeGreaterThan(0);
    });

    it('should display email address', () => {
      renderFooter();
      const emails = screen.getAllByText('excel@dagrojel.com');
      expect(emails.length).toBeGreaterThan(0);
    });

    it('should have tel: link for phone numbers', () => {
      renderFooter();

      // Find all links with tel: href
      const telLinks = screen.getAllByRole('link').filter(
        link => link.getAttribute('href')?.startsWith('tel:')
      );
      expect(telLinks.length).toBeGreaterThan(0);
    });

    it('should have mailto: link for email', () => {
      renderFooter();

      // Find all links with mailto: href
      const mailtoLinks = screen.getAllByRole('link').filter(
        link => link.getAttribute('href')?.startsWith('mailto:')
      );
      expect(mailtoLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Social Media Links', () => {
    it('should render all social media icons', () => {
      renderFooter();

      // Check for social media links (4 expected: Facebook, Twitter, Instagram, Youtube)
      const socialLinks = screen.getAllByRole('link').filter(link =>
        link.querySelector('svg')
      );
      expect(socialLinks.length).toBeGreaterThanOrEqual(4);
    });

    it('should have social links with proper styling classes', () => {
      renderFooter();

      // Find social links specifically by their styling classes
      const socialLinks = screen.getAllByRole('link').filter(link =>
        link.classList.contains('w-9') &&
        link.classList.contains('h-9') &&
        link.classList.contains('rounded-full') &&
        link.querySelector('svg')
      );

      expect(socialLinks.length).toBe(4); // Facebook, Twitter, Instagram, Youtube

      socialLinks.forEach(link => {
        expect(link).toHaveClass('w-9');
        expect(link).toHaveClass('h-9');
        expect(link).toHaveClass('rounded-full');
      });
    });
  });

  describe('Bottom Bar', () => {
    it('should display copyright notice with current year', () => {
      renderFooter();

      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(`© ${currentYear} Dagrojel Excel Academy`))).toBeInTheDocument();
    });

    it('should display "All rights reserved"', () => {
      renderFooter();
      expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
    });

    it('should render Privacy Policy link', () => {
      renderFooter();
      const privacyLink = screen.getByText('Privacy Policy').closest('a');
      expect(privacyLink).toBeInTheDocument();
      // Just check that the link exists - href handling depends on context
    });

    it('should render Terms of Use link', () => {
      renderFooter();
      const termsLink = screen.getByText('Terms of Use').closest('a');
      expect(termsLink).toBeInTheDocument();
      // Just check that the link exists - href handling depends on context
    });
  });

  describe('Layout', () => {
    it('should have correct background color', () => {
      renderFooter();
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('bg-primary');
    });

    it('should have correct text color', () => {
      renderFooter();
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('text-primary-foreground');
    });
  });

  describe('Accessibility', () => {
    it('should have proper role for footer', () => {
      renderFooter();
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should have alt text for logo image', () => {
      renderFooter();
      const logo = screen.getByAltText('Dagrojel Excel Academy');
      expect(logo).toBeInTheDocument();
    });
  });
});
