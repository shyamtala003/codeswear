import React, { useEffect } from "react";
import { useRouter } from "next/router";
const Product = () => {
  let router = useRouter();
  useEffect(() => {
    console.log(router);
  }, [router.isReady]);
  let { slug } = router.query;
  return <div>Product:{slug}</div>;
};

export default Product;
