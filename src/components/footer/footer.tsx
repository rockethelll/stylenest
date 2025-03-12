import logo from '../../../public/logo.svg';
import Image from 'next/image';

import { shopCategoriesLinks, shopCollectionsLinks } from '@/lib/links';

import FooterForm from './footer-form';
import FooterLinks from './footer-links';
import { FooterSocials } from './footer-socials';

const Footer = () => {
  return (
    <footer className="grid gap-12 px-4 py-12 mt-auto bg-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2 lg:w-full">
          <h2 className="text-xl font-semibold">Join our newsletter</h2>
          <p className="text-neutral-600">
            We&apos;ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <FooterForm />
      </div>

      <div className="grid gap-12 lg:gap-16 md:grid-cols-[1fr_2fr] md:gap-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
          <div className="flex flex-col items-start gap-6">
            <Image
              src={logo}
              alt="Stylenest's logo"
              width={100}
              height={24}
              className="w-auto h-8"
            />
            <p>
              Craft stunning style journeys that weave more joy into every
              thread.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:justify-items-center">
          <FooterLinks label="Shop categories" links={shopCategoriesLinks} />
          <FooterLinks label="Shop collections" links={shopCollectionsLinks} />
        </div>
      </div>

      <FooterSocials />
    </footer>
  );
};

export default Footer;
