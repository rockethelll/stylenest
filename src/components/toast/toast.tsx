'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { StatusProps } from '@/lib/types';

import ErrorToast from './error';
import SuccessToast from './success';

const Toast = ({ status }: { status: StatusProps }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (status && (status.message || status.error)) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!isVisible || !status || (!status.message && !status.error)) return null;

  const toastContainer = document.getElementById('toast');
  if (!toastContainer) {
    return null;
  }

  const content = (
    <div className="fixed z-10 top-6 right-[50%] translate-x-[50%] text-sm animate-[fadeInOut_3s_ease-in-out] min-w-[360px]">
      {status.error ? (
        <ErrorToast status={status} />
      ) : (
        <SuccessToast status={status} />
      )}
    </div>
  );

  return createPortal(content, toastContainer);
};

export default Toast;
