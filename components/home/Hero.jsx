import Image from "next/image";
import { Button } from "../ui/button";
import { assets } from "@/assets";

const Hero = () => {
  return (
    <div className="w-full h-[88vh] flex justify-center flex-col">
      {/* Define Grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            Mega Sale <span className="text-rose-600">Special</span> Offer up to{" "}
            <span className="text-orange-500">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black/70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sed harum quam eius quisquam? Eligendi nobis provident numquam
            ducimus, inventore nemo unde aperiam, repudiandae deserunt mollitia
            ad, neque illo doloremque?
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className={"bg-blue-600"}>
              Shop Now
            </Button>
            <Button size={"lg"}>Explore More</Button>
          </div>
        </div>
        {/* Image Content */}
        <div className="hidden lg:block">
          <Image
            src={assets.hero2}
            alt={"Hero"}
            width={600}
            height={600}
            className="lg:h-1/2 xl:h-[80%] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
