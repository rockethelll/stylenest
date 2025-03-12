import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import FooterForm from '@/components/footer/footer-form';

// Mock axios
vi.mock('axios');

describe('FooterForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<FooterForm />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /subscribe/i }),
    ).toBeInTheDocument();
  });

  it('enter a valid email and validate email input', async () => {
    render(<FooterForm />);
    const user = userEvent.setup();
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const submitButton = screen.getByRole('button', { name: /subscribe/i });

    // Test valid email
    await user.type(emailInput, 'test@mail.com');
    await user.click(submitButton);

    expect(
      screen.queryByText(/please enter a valid email address/i),
    ).not.toBeInTheDocument();
  });

  it('should display en error if email is invalid', async () => {
    render(<FooterForm />);
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /subscribe/i });
    const input = screen.getByRole('textbox');

    await user.type(input, 'mail@mail');
    await user.click(button);

    expect(
      await screen.findByText('Please enter a valid email address'),
    ).toBeInTheDocument();
  });

  it('should submit form successfully', async () => {
    // Mock successful response
    (axios.post as any).mockResolvedValueOnce({
      status: 200,
      data: { message: 'Successfully subscribed!' },
    });

    // Create toast container before rendering
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast';
    document.body.appendChild(toastContainer);

    render(<FooterForm />);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/enter your email/i);
    const button = screen.getByRole('button', { name: /subscribe/i });

    await user.type(input, 'mail@mail.com');
    await user.click(button);

    expect(axios.post).toHaveBeenCalledWith(
      'https://www.greatfrontend.com/api/projects/challenges/newsletter',
      { email: 'mail@mail.com' },
    );

    await waitFor(() => {
      expect(input).toHaveValue('');
      expect(screen.getByText('Successfully subscribed!')).toBeInTheDocument();
    });

    // Cleanup
    document.body.removeChild(toastContainer);
  });
});
