import { Link } from "react-router";

const HeaderNavbar = () => {
  return (
    <div className="navbar py-5 px-3">
      <Link to={"/"} className="text-2xl font-bold">
        App For School
      </Link>
    </div>
  );
};

export default HeaderNavbar;
