"use client";

import { IProduct } from "@/app/interface/IProduct";
import { Loading } from "../Loading";
import { motion } from "framer-motion";

export function ShowData({
  filteredProducts,
}: {
  filteredProducts: IProduct[];
}) {
  return (
    <div className="col-md-9">
      <h1 className="my-4 text-center">E-commerce Store</h1>

      <div className="row">
        {filteredProducts.length != 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ y: 8,  opacity: 0.9 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 , delay: 0 }}
              viewport={{ once: true }}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div
                className="card d-flex flex-column"
                style={{ height: "100%" }}
              >
                <div className="h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary mt-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
