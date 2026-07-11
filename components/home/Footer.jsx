import { assets } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* Define Grid */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st Part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex,
            ratione tempora magni voluptatum sint ut officia neque quia nam.
          </p>
          <p className="text-base opacity-60 text-black mt-6">
            (+000) 1234 5678 90 - info@example.com
          </p>
        </div>
        {/* 2nd Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_links">About us</p>
          <p className="footer_links">Privacy Policy</p>
          <p className="footer_links">Return Policy</p>
          <p className="footer_links">Shipping Policy</p>
          <p className="footer_links">Dropshipping</p>
        </div>
        {/* 3rd Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Acount</h1>
          <p className="footer_links">Dashboard</p>
          <p className="footer_links">My Order</p>
          <p className="footer_links">Account Details</p>
          <p className="footer_links">Track Orders</p>
        </div>
        {/* 4th Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_links">Affiliate</p>
          <p className="footer_links">Best Sellers</p>
          <p className="footer_links">Latest Products</p>
          <p className="footer_links">Sale Products</p>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 flex flex-col gap-6 sm:flex-row justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60 max-sm:text-center">
          &copy; Copyright WDW Shops {new Date().getFullYear()}
        </p>
        <Image
          src={assets.pay2}
          alt={"Pay"}
          width={230}
          height={230}
          className="object-contain max-sm:mx-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
