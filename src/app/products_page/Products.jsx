"use client";

import Card from "@/components/Card/Card";
import DropDownFilter from "@/components/DropDownFilter/DropDownFilter";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const url = "https://api.escuelajs.co/api/v1/products";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { cache: "force-cache" });

        if (!response.ok) {
          console.error("ERROR IN FETCHING DATA");
          return;
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h1 className="text-center text-5xl lg:text-8xl playfair font-bold text-[#646B5D] mb-20 mt-10">
        Products
      </h1>

      {/* Filter + Search */}
      <div className="px-[50px] flex items-center justify-center gap-10 lg:flex-row flex-col-reverse">
        <DropDownFilter
          products={products}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <div className="bg-[#a7b3a252] rounded-full flex items-center relative px-5">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 lg:w-200 outline-0 border-0 playfair py-4 bg-transparent"
          />
        </div>
      </div>

      {/* Products + Loading */}
      <div className="mt-20 flex flex-wrap gap-20 items-center justify-center px-[30px] pb-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#A7B3A2] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[#646B5D]">Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className="text-[#646B5D] text-lg">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
