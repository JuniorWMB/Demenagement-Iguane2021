import React, { useContext } from "react";
import { ContextStore } from "../../context/context";

const BasketVolume = () => {
  const { navCalculDevis, setNavCalculDevis, products, setProducts } =
    useContext(ContextStore);
  return (
    <>
      <div></div>
      {navCalculDevis === 0 ? (
        <div className="overflow-y-scroll relative my-2 w-[450px] p-2 h-[300px] shadow-lg rounded-xl border-green-500 border-2 bg-white ">
          <p className="bg-green-300 ">13m3</p>

          <div className=" ">
            {products.map((product, idx) => {
              return (
                <div key={idx} className="border border-blue-500 flex ">
                  <button
                    className=" border-2 cursor-pointer border-green-600 rounded-full h-6 w-6  mx-1 flex justify-center items-center text-green-600 hover:text-white hover:bg-green-600"
                    onClick={() => {
                      const newProduct = [...products];

                      if (newProduct[idx].quantity === 1) {
                        newProduct.splice(idx, 1);
                      } else {
                        newProduct[idx].quantity--;
                      }
                      setProducts(newProduct);
                    }}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className="border-2 curs cursor-pointer border-green-600 rounded-full h-6 w-6 mx-1 flex justify-center items-center text-green-600 hover:text-white hover:bg-green-600"
                    onClick={() => {
                      const newProduct = [...products];
                      newProduct[idx].quantity++;
                      setProducts(newProduct);
                    }}
                  >
                    +
                  </button>
                  {product.name}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BasketVolume;
