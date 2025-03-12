import Link from 'next/link';

import { footerSocialsLinks } from '@/lib/constants';

import { ClientIcon } from './footer-icons';

export const FooterSocials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto] gap-4 pt-8 border-t border-neutral-200">
      <span className="text-neutral-500">
        &copy; {new Date().getFullYear()} StyleNest, Inc. All rights reserved.
      </span>
      <div className="flex justify-start w-full gap-6 lg:justify-end">
        {footerSocialsLinks.map((link) => (
          <Link
            href="/"
            className="w-6 h-6 transition-all duration-300 text-neutral-400 hover:scale-150 hover:text-gray-600"
            key={link.name}
            suppressHydrationWarning
          >
            <ClientIcon Icon={link.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
};
