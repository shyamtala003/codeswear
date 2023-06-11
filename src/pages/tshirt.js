import React, { useEffect, useState, useCallback } from "react";
import TshirtItemCard from "@/components/TshirtItemCard";
import { v4 as uuidv4 } from "uuid";

const Tshirt = () => {
  let [TShirtList, setTShirtList] = useState([]);

  const getTShirtList = useCallback(async () => {
    try {
      const response = await fetch("/api/category/T-Shirts");
      const data = await response.json();
      setTShirtList(data.products);
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching T-Shirt list:", error);
    }
  }, []);

  useEffect(() => {
    getTShirtList();
  }, []);
  return (
    <div className="items_container">
      {TShirtList &&
        TShirtList.map((item) => {
          return <TshirtItemCard key={uuidv4()} tshirt={item}></TshirtItemCard>;
        })}
      {/* <TshirtItemCard></TshirtItemCard>
      <TshirtItemCard></TshirtItemCard>
      <TshirtItemCard></TshirtItemCard>
      <TshirtItemCard></TshirtItemCard> */}
    </div>
  );
};

export default Tshirt;
