import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../interface/IProduct";

export function useGetProductApi() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const FetchData = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/`);
      await setProducts(data);
      await setFilteredProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    FetchData();
  }, []);
  return { products, filteredProducts, setFilteredProducts };
}
