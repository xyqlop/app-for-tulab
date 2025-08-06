import { Link } from "react-router";

const HeaderNavbar = () => {
  return (
    <div className="navbar py-5 px-3">
      <Link to={"/"} className="lg: text-2xl">
        My App
      </Link>
    </div>
  );
};

export default HeaderNavbar;
