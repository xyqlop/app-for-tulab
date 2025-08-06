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
      <div className="flex flex-row justify-center items-center hover:text-secondary gap-2 transition">
        {React.cloneElement(icon, {
          className: "size-6 hover:scale-130 lg:hover:scale-100 transition",
        })}
        <p className="hidden lg:block text-lg font-medium">{label}</p>
      </div>
    </Link>
  );
};

export default NavbarLinks;
