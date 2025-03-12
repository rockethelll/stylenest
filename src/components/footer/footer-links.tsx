import clsx from 'clsx';
import Link from 'next/link';

type FooterLinksProps = {
  label: string;
  links: {
    name: string;
    href: string;
  }[];
};

const FooterLinks = ({ label, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium uppercase text-neutral-500 ">{label}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="rounded px-0.5 font-medium text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
