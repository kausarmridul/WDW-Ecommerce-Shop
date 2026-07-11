"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";
import { toast } from "sonner";
const AddCart = ({ product }) => {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    toast.success("Item Added to Cart", { position: "bottom-left" });
    dispatch(addItem(product));
  };
  return (
    <Button onClick={() => addCartHandler()} className={"mt-6"} size="lg">
      Add to Cart
    </Button>
  );
};

export default AddCart;
