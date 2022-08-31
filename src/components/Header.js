import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import amznLogoREV from "../assets/images/amzn-logo-rev.svg";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import indiaFlag from "../assets/images/india-flag.svg";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex flex-grow items-center bg-amzn_blue p-1 py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => {router.push("/")}}
            src={amznLogoREV}
            width={140}
            height={30}
            alt="Amazon logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            className="px-4 py-2 h-full w-6 flex-1 rounded-l-md focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="h-8 p-2" />
        </div>

        {/* Right container */}
        <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap">
          <Image
            src={indiaFlag}
            height={30}
            width={30}
            alt="Country flag"
            objectFit="contain"
            className="hidden md:inline cursor-pointer"
          />
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link hidden md:inline">
            <p>Returns &</p>
            <p className="font-extrabold md:text-sm">Orders</p>
          </div>
          <div onClick={() => {router.push("/checkout")}} className="link relative flex items-center space-x-1">
            <span className="absolute -top-1 -right-1 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline mt-1 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-4 p-2 pl-6 bg-amzn_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-5 mr-1" />
          All
        </p>
        <p className="link whitespace-nowrap">Prime</p>
        <p className="link whitespace-nowrap">Prime Video</p>
        <p className="link whitespace-nowrap">Today&apos;s Deals</p>
        <p className="link whitespace-nowrap hidden sm:inline-flex">Amazon Business</p>
        <p className="link whitespace-nowrap hidden sm:inline-flex">Electronics</p>
        <p className="link whitespace-nowrap hidden md:inline-flex">Food & Grocery</p>
        <p className="link whitespace-nowrap hidden md:inline-flex">Health & Personal Care</p>
        <p className="link whitespace-nowrap hidden lg:inline-flex">Buy Again</p>
        <p className="link whitespace-nowrap hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
}

export default Header;
