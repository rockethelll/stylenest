import { shopCategoriesLinks, shopCollectionsLinks } from '@/lib/constants';

import FooterContent from './footer-content';
import FooterForm from './footer-form';
import FooterLinks from './footer-links';
import { FooterSocials } from './footer-socials';

const Footer = () => {
  return (
    <footer className="px-4 py-12 mx-auto mt-auto bg-white">
      <FooterForm />
      <FooterContent />

      <div className="flex">
        <FooterLinks label="Shop categories" links={shopCategoriesLinks} />
        <FooterLinks label="Shop collections" links={shopCollectionsLinks} />
      </div>

      <FooterSocials />
    </footer>
  );
};

export default Footer;
