'use client';

import logo from '../../../public/logo.svg';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ANIMATION_DURATION } from '@/lib/constants';

type MobileMenuNavProps = {
  links: { name: string; href: string }[];
};

const MobileMenuNav = ({ links }: MobileMenuNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, ANIMATION_DURATION);
    } else {
      setIsOpen(true);
    }
  };

  const menuContent = (
    <nav
      className={clsx(
        'fixed inset-0 z-[1030] max-w-[400px] bg-white px-4 py-6 lg:hidden shadow-lg',
        'flex flex-col',
        isClosing ? 'animate-navbar-menu-close' : 'animate-navbar-menu',
      )}
      aria-label="Mobile Menu"
    >
      <div className="flex items-center justify-between">
        <Image
          src={logo}
          alt="Stylenest logo"
          width={100}
          height={32}
          className="h-9 w-[120px]"
        />
        <button
          onClick={toggleMenu}
          aria-label="Close Mobile Menu"
          aria-expanded={isOpen}
        >
          <X size={20} />
        </button>
      </div>

      <ul className="flex flex-col pt-6 gap-y-2">
        {links.map(({ name, href }) => (
          <li key={name} className="py-2">
            <Link
              href={href}
              className="rounded px-0.5 font-medium text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] text-sm"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <button
        className="block rounded text-secondary lg:hidden focus:outline-none focus:ring-4 focus-visible:brand-solid/[0.12]"
        onClick={toggleMenu}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Toggle Mobile Menu"
      >
        <Menu size={24} />
      </button>

      {(isOpen || isClosing) &&
        mounted &&
        createPortal(menuContent, document.body)}
    </>
  );
};

export default MobileMenuNav;
