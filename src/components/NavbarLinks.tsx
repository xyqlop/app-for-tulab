import React from "react";
import { Link } from "react-router";

interface NavbarLinksProps {
  to: string;
  label: string;
  icon: React.ReactElement<{ className: string }>;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ to, label, icon }) => {
  return (
    <Link to={to}>
      <div className="flex flex-row justify-center items-center hover:text-secondary gap-2">
        {React.cloneElement(icon, { className: "size-6" })}
        <p className="hidden lg:block text-lg">{label}</p>
      </div>
    </Link>
  );
};

export default NavbarLinks;
