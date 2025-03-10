import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

import { ClientIcon } from './footer-icons';

const links = [
  {
    name: 'YouTube',
    icon: YouTubeIcon,
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
  },
  {
    name: 'X',
    icon: XIcon,
  },
];

export const FooterSocials = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-8 border-t border-neutral-200 border-1">
      <span className="text-neutral-500">
        &copy; 2024 StyleNest, Inc. All rights reserved.
      </span>
      <div className="flex justify-start w-full gap-6">
        {links.map((link) => (
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
