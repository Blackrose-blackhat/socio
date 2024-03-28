import { IoChatbox, IoHome, IoPeople, IoPerson } from "react-icons/io5";
import { MdCreateNewFolder, MdExplore } from "react-icons/md";

export const sidebarLinks = [
  {
    imgUrl: <IoHome className="text-2xl" />,
    route: "/dashboard",
    label: "Home",
  },
  {
    imgUrl: <IoPeople className="text-2xl" />,
    route: "/network",
    label: "Network",
  },

  {
    imgUrl: <MdCreateNewFolder className="text-2xl" />,
    route: "/create-gig",
    label: "Create Gig",
  },
  {
    imgUrl: <MdExplore className="text-2xl" />,
    route: "/explore",
    label: "Explore",
  },

  {
    imgUrl: <IoPerson className="text-2xl" />,
    route: "/profile",
    label: "Profile",
  },
];
