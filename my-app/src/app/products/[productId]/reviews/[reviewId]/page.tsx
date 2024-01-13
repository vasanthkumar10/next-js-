interface ReviewProps {
  params: {
    reviewId: string;
    productId: string;
  };
}

export default function ProductDetails(props: ReviewProps) {
  return (
    <>
      <h1>
        Review {props.params.reviewId} for product - {props.params.productId}
      </h1>
    </>
  );
}
