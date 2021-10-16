import React, { useContext } from "react";
import { ContextStore } from "../../context/context";

const BasketVolume = () => {
  const {
    navCalculDevis,
    setNavCalculDevis,
    products,
    setProducts,
    showInput,
    setShowInput,
    // totalVolume,
    iChoiceMyVolume,
    setIChoiceMyVolume,
    setVolumeCalculDem,
  } = useContext(ContextStore);
  let totalVolume = 0;

  for (let i = 0; i < products.length; i++) {
    totalVolume =
      totalVolume + Number(products[i].volume * products[i].quantity);
  }
  setVolumeCalculDem(totalVolume.toFixed(2));
  return (
    <>
      {navCalculDevis === 0 ? (
        <div className="overflow-y-scroll relative my-2 w-[450px]  h-[300px] shadow-lg rounded-xl border-green-500 border-2 bg-white ">
          <div className=" ">
            {products.map((product, idx) => {
              return (
                <div key={idx} className="mb-2 border-b flex ">
                  <button
                    className=" border-2 cursor-pointer border-green-600 rounded-full h-6 w-6  mx-2 my-2 flex justify-center items-center text-green-600 hover:text-white hover:bg-green-600"
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
                  <p className="mx-2 my-2 text-l font-extrabold">
                    {product.quantity}
                  </p>
                  <button
                    className="border-2 curs cursor-pointer border-green-600 rounded-full h-6 w-6 mx-2 my-2 flex justify-center items-center text-green-600 hover:text-white hover:bg-green-600"
                    onClick={() => {
                      const newProduct = [...products];
                      newProduct[idx].quantity++;
                      setProducts(newProduct);
                    }}
                  >
                    +
                  </button>
                  <p
                    className="mx-2 my-2
                 text-l text-gray-900
                  "
                  >
                    {product.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bottom-0 sticky">
            <p
              className="bg-green-700 uppercase 
              text-l font-extrabold
              text-white
            "
            >
              Volume: {totalVolume.toFixed(2)}
            </p>
          </div>
          {showInput && (
            <input
              type="number"
              className=" bottom-0 sticky border border-red-900 w-full"
              value={iChoiceMyVolume}
              onChange={(e) => setIChoiceMyVolume(e.target.value)}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

export default BasketVolume;
