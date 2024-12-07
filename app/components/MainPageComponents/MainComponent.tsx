"use client";
import { useGetProductApi } from "@/app/services/getProductService";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FilterProduct } from "./Filter";
import { motion } from "framer-motion";

const ShowData = dynamic(
  () => import("./ShowData").then((mod) => mod.ShowData),
  {
    ssr: false,
  }
);

export default function MainComponent() {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { filteredProducts, products, setFilteredProducts } =
    useGetProductApi();

  const filterProducts = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [category, minPrice, maxPrice, searchTerm]);

  return (
    <div className="row my-4">
      {/* filter */}
      <FilterProduct
        filterProducts={filterProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setCategory={setCategory}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* show items */}
      <ShowData filteredProducts={filteredProducts} />
    </div>
  );
}
