import React from "react";
import { emballagesProduct } from "../../utils/dataProduct";
import Image from "next/image";
import Link from "next/link";

const ProductEmballage = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Emballages et fournitures
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choissisez</span>
          </span>{" "}
          vos emballages et vos fournitures
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Nous vous proposons different types de carton pour votre déménagement.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        {emballagesProduct.map((prod, i) => (
          <div
            key={i}
            className="duration-300 cursor-pointer transform bg-white border-green-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2"
          >
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">{prod.name}</h6>
              <Image
                src={prod.picture}
                alt={prod.name}
                width={100}
                height={100}
              />
              <p>{prod.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductEmballage;
