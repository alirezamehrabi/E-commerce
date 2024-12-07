"use client";

import { Dispatch, SetStateAction } from "react";

export function FilterProduct({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  filterProducts,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  minPrice: string;
  maxPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  filterProducts: () => void;
}) {
  return (
    <div className="col-md-3">
      <h4>Filters</h4>
      <form>
        {/* Search Filter */}
        <div className="mb-3">
          <label htmlFor="search" className="form-label">
            Search by Name
          </label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categry Filter */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <div className="d-flex justify-content-between">
            <input
              type="number"
              className="form-control"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={filterProducts}
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
