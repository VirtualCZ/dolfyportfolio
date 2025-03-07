import Link, { LinkProps } from "./Link";
interface LinksProps {
  links: LinkProps[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="links">
      {links.map((link, index) => (
        <Link
          key={index}
          text={link.text}
          link={link.link}
          thisWindow={link.thisWindow}
        />
      ))}
    </div>
  );
};

export default Links;
