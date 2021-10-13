import React from "react";
import FormRecap from "./FormRecap";

const DevisRecap = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              RECAPITULATIF
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
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Un</span>
            </span>{" "}
            aperçu de tout les élements que vous avez fournis
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Ci-dessous un récapitulatif de vos informations, pour valider la
            demande il vous suffis de cliquer sur envoi et nous revenons vers
            vous le plus rapidement possible.
          </p>
        </div>
      </div>
      <form
        action="/success"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
        className="max-w-screen-xl sm:mx-auto"
      >
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Votre adresse de départ pour votre déménagement est
              </p>
              <p className="text-gray-700">13 square des cottages 91300 Evry</p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Votre date de démenagement est le
              </p>
              <p className="text-gray-700">vendredi 13 janvier 2021</p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                La distance entre votre lieu de départ et d'arrivée est de
              </p>
              <p className="text-gray-700">13 kilomètres</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Votre adresse de d'arrivée pour votre déménagement est
              </p>
              <p className="text-gray-700">13 rue greenwood 91200 Juvisy</p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Votre date de livraison est le
              </p>
              <p className="text-gray-700">Samedi 17 juillet 2021</p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Vous avez un volume total de
              </p>
              <p className="text-gray-700">2 m3</p>
              <p className="mb-4 text-xl font-medium">Vous avez pris</p>
              <p className="text-gray-700">3 produits</p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Votre démenagement vous couteras
              </p>
              <p className="text-green-700 text-3xl font-bold">140€</p>
            </div>
          </div>
        </div>
        <FormRecap />
      </form>
    </div>
  );
};

export default DevisRecap;
