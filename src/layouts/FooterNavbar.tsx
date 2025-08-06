import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import NavbarLinks from "../components/NavbarLinks";

const FooterNavbar = () => {
  return (
    <div className="navbar bottom-0 py-5 flex justify-around">
      <NavbarLinks to="/" icon={<HomeIcon />} label={"Home"} />
      <NavbarLinks
        to="/about"
        icon={<InformationCircleIcon />}
        label={"About"}
      />
      <NavbarLinks to="/contact" icon={<PhoneIcon />} label={"Contact"} />
    </div>
  );
};

export default FooterNavbar;
