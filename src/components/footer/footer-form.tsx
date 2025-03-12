'use client';

import Toast from '../toast/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { StatusProps } from '@/lib/types';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
});

type FormData = z.infer<typeof formSchema>;

const FooterForm = () => {
  const [status, setStatus] = useState<StatusProps>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        'https://www.greatfrontend.com/api/projects/challenges/newsletter',
        data,
      );
      if (response.status === 200) {
        setStatus({ message: response.data.message });
      } else {
        setStatus({ error: response.data.error });
        console.error('error', response.data);
      }
      reset();
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <>
      <Toast status={status} />
      <form
        className="flex flex-col w-full gap-4"
        aria-label="Newsletter subscription form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email" id="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className={clsx(
            'rounded px-[14px] py-[10px] border bg-neutral-50 text-neutral-900 h-10',
            'overflow-hidden text-ellipsis transition-shadow focus:outline-none focus-within:rounded',
            {
              'border-red-600': errors.email,
              'border-neutral-200': !errors.email,
              'input-error': errors.email,
              'input-focus': !errors.email,
            },
          )}
          placeholder="Enter your email"
          aria-required="true"
          aria-invalid="false"
          autoComplete="email"
          {...register('email')}
        />
        {errors.email && (
          <div className="text-sm text-red-600">{errors.email.message}</div>
        )}
        <button
          type="submit"
          className="flex items-center justify-center h-10 text-white bg-indigo-700 rounded shadow-lg text-sm font-semibold hover:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
          aria-label="Subscribe to newsletter"
          disabled={isSubmitting}
        >
          Subscribe
        </button>
      </form>
    </>
  );
};

export default FooterForm;
