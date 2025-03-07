export interface LinkProps {
  text: string;
  link: string;
  thisWindow?: boolean;
}

const Link: React.FC<LinkProps> = ({ text, link, thisWindow = false }) => {
  return (
    <a
      href={link}
      {...(!thisWindow ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {text}
    </a>
  );
};

export default Link;