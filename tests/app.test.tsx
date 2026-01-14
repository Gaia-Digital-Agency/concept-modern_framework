import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app';
import Contact from '../src/pages/contact';

// Helper to render with Router
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Brand Website Functional Tests', () => {
  
  it('should render the Navbar and Logo', () => {
    renderWithRouter(<App />);
    expect(screen.getByAltText(/Brand Logo/i)).toBeInTheDocument();
  });

  it('should toggle mobile menu when hamburger is clicked', () => {
    renderWithRouter(<App />);
    const menuBtn = screen.getByLabelText(/Toggle Navigation/i);
    fireEvent.click(menuBtn);
    const navLinks = screen.getByRole('list');
    expect(navLinks.classList.contains('show')).toBe(true);
  });

  it('should validate and submit the contact form', async () => {
    renderWithRouter(<Contact />);
    
    const nameInput = screen.getByPlaceholderText(/John Doe/i);
    const emailInput = screen.getByPlaceholderText(/john@example.com/i);
    const submitBtn = screen.getByText(/Send Message/i);

    // Simulate User Input
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(emailInput, { target: { value: 'jane@test.com' } });
    fireEvent.click(submitBtn);

    // Check for mock loading state
    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
  });

  it('should display visitor location in the footer', async () => {
    renderWithRouter(<App />);
    // Initial state
    expect(screen.getByText(/Visitor Location:/i)).toBeInTheDocument();
  });
});