import Link from "next/link";

type FooterLinksProps = {
  label: string;
  links: {
    name: string;
    href: string;
  }[];
};

const FooterLinks = ({label, links}: FooterLinksProps) => {
  return (
    <div>
      <p className="uppercase text-sm font-medium">{label}</p>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks