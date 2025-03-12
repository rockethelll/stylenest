import logo from '../../../public/logo.svg';
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
    <header className="z-10 sticky top-0 h-[68px] py-3 lg:h-auto xl:px-0 flex items-center justify-between gap-4 lg:gap-20 bg-white/80 backdrop-blur-sm">
      <div className="w-[163]">
        <Image
          src={logo}
          alt="Stylenest's logo"
          width={100}
          height={20}
          className="h-8 w-[120px]"
        />
      </div>
      <nav className={clsx('hidden flex-1 gap-2', 'lg:flex')}>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="rounded px-0.5 text-neutral-600 font-medium text-secondary hover:text-neutral-900 focus:text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ShoppingBag size={24} />
        <MobileMenuNav links={links} />
      </div>
    </header>
  );
};

export default Navbar;
