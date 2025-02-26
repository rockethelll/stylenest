import logo from '../../public/logo.svg';
import clsx from 'clsx';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenuNav from './mobile-menu';

const links = [
  {
    name: 'Shop all',
    href: '#',
  },
  {
    name: 'Latest arrivals',
    href: '#',
  },
];

const Navbar = () => {
  return (
    <header
      className={clsx(
        'z-[1020] sticky top-0 mx-auto h-[68px] max-w-[1216px] px-4 my-2 md:px-8 lg:h-auto xl:px-0',
        'flex items-center justify-between gap-4 lg:gap-20',
      )}
    >
      <Image
        src={logo}
        alt="Stylenest's logo"
        width={100}
        height={32}
        className="w-[120px]"
      />
      <nav className={clsx('hidden flex-1 gap-2', 'lg:flex')}>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}
                className={clsx(
                  'rounded px-0.5 font-medium text-secondary',
                  'hover:text-neutral-900 focus:text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
                )}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        <ShoppingBag size={24} />
        <MobileMenuNav links={links} />
      </div>
    </header>
  );
};

export default Navbar;
