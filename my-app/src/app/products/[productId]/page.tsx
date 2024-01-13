import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails(props: ProductDetailProps) {
  if (Number(props.params.productId) > 5) notFound();
  return (
    <>
      <h1>Product Details {props.params.productId}</h1>
    </>
  );
}
