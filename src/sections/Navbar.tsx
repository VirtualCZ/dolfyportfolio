interface NavbarProps {
  text: string;
  additional?: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ text, additional = null }) => {
  return (
    <nav>
      <span className="nav-text">
        {text}
        {additional ? (
          <span className="nav-text-additional"> {additional}</span>
        ) : null}
      </span>
    </nav>
  );
};
export default Navbar;
