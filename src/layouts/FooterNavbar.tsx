import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
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
      <NavbarLinks
        to="/add-data"
        icon={<PlusCircleIcon />}
        label={"Tambah Data"}
      />
      <NavbarLinks to="/contact" icon={<PhoneIcon />} label={"Contact"} />
      <NavbarLinks to="/data" icon={<TableCellsIcon />} label={"Data"} />
    </div>
  );
};

export default FooterNavbar;
