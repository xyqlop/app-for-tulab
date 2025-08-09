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
      <NavbarLinks to="/" icon={<HomeIcon />} label={"Beranda"} />
      <NavbarLinks to="/data" icon={<TableCellsIcon />} label={"Data List"} />
      <NavbarLinks
        to="/add-data"
        icon={<PlusCircleIcon />}
        label={"Tambah Data"}
      />
      <NavbarLinks
        to="/about"
        icon={<InformationCircleIcon />}
        label={"Tentang Gw"}
      />
      <NavbarLinks to="/contact" icon={<PhoneIcon />} label={"Kontak Kami"} />
    </div>
  );
};

export default FooterNavbar;
