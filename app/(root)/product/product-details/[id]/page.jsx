import { getSingleProduct, getProductByCategory } from "@/Request/request";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import AddCart from "../../../../../components/home/AddCart";
import ProductCard from "./../../../../../components/home/ProductCard";
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const singlProduct = await getSingleProduct(id);

  const reletedProduct = await getProductByCategory(singlProduct.category);
  const num = Math.round(singlProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);
  if (!singlProduct) {
    return <div>Product not found</div>;
  } else {
    return (
      <div className="mt-20">
        {/* Define A Grid System */}
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
          {/* Image */}
          <div className="col-span-3 mb-6 lg:mb-0">
            <Image
              src={singlProduct.image}
              alt={singlProduct.title}
              width={400}
              height={400}
              className=""
            />
          </div>
          {/* Content */}
          <div className="col-span-4">
            {/* Title */}
            <h1 className="lg:text-3xl text-2xl font-bold text-black">
              {singlProduct.title}
            </h1>
            {/* Ratings */}
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex items-center">
                {starArray.map((_, index) => (
                  <StarIcon
                    key={index}
                    size={20}
                    fill="yellow"
                    className="text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-base text-gray-700 font-semibold">
                ({singlProduct?.rating?.count} Reviews)
              </p>
            </div>
            {/* Line */}
            <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4" />
            {/* Price */}
            <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
              ${singlProduct?.price?.toFixed(2) ?? "0.00"}
            </h1>
            {/* Description */}
            <p className="mt-4 text-base opacity-70 text-black">
              {singlProduct?.description}
            </p>
            {/* Extra Info */}
            <p className="text-sm mt-4 text-black/70 font-semibold">
              Category: {singlProduct?.category}
            </p>
            <p className="text-sm mt-2 text-black/70 font-semibold">
              Tag: Shop,WDW
            </p>
            <p className="text-sm mt-2 text-black/70 font-semibold">
              SKU : {(Math.random() * 500).toFixed(2)}
            </p>
            {/* AddToCartButton */}
            <AddCart product={singlProduct} />
          </div>
        </div>
        <div className="w-4/5 mx-auto mt-16">
          <h1 className="text-2xl text-black font-semibold">Related Product</h1>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {reletedProduct?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
