import { assets } from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/store/cartSlice";
import { toast } from "sonner";

const CartSidebar = ({ items }) => {
  const dispatch = useDispatch();

  const addCartHandler = (item) => {
    toast.success("Item Added to Cart", { position: "bottom-left" });
    dispatch(addItem(item));
  };
  const removeCartHandler = (id) => {
    toast.warning("Remove Item from Cart", { position: "bottom-left" });
    dispatch(removeItem({ id }));
  };
  return (
    <div className="py-6 h-full">
      {/* Heading */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/* If There is no cart */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src={assets.cart}
            alt={"Expty_cart"}
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="font-semibold mt-8 text-2xl">Your Cart is empty</h1>
        </div>
      )}
      {/* If there is a cart item */}
      {items.length > 0 && (
        <div className="flex flex-col justify-between min-h-[96%]">
          <div>
            {items.map((item) => (
              <div className="border-b-2 border-gray-300/60 p-4" key={item.id}>
                <div>
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item?.title}
                  </h1>
                  <h1 className="text-base text-blue-950 font-bold">
                    {(item?.price * item?.quantity).toFixed(2)}
                  </h1>
                  <h1 className="text-base font-bold mb-2">
                    Quantity : {item?.quantity}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => removeCartHandler(item.id)}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button onClick={() => addCartHandler(item)} size={"sm"}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4">
            <Link href={"/cart"} className="w-full block">
              <SheetClose className={"w-full block"}>
                <Button className={"w-full block rounded-md"}>
                  View All Cart
                </Button>
              </SheetClose>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
