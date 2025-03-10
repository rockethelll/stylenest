import logo from '../../public/logo.svg';
import Image from 'next/image';

const FooterContent = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="Stylenest's logo"
        width={100}
        height={20}
        className="h-8 w-[120px]"
      />
      <p>Craft stunning style journeys that weave more joy into every thread.</p>
    </div>
  );
};

export default FooterContent;
