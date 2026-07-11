import Image from "next/image";
import { assets } from "./../../assets";
import Link from "next/link";
import SearchBox from "./../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartBtn from "./../Helper/ShoppingCartBtn";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-1 bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={assets.logo} alt={"Logo"} width={140} height={140} />
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* SearchBox */}
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />
          {/* ShoppingCart */}
          <ShoppingCartBtn />
          {/* User Button */}
          <UserIcon size={26} cursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
