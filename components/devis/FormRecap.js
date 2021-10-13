import React from "react";

const FormRecap = () => {
  return (
    <div className="min-h-screen mt-20 p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Formulaire</h2>
          <p className="text-gray-500 mb-6">Plus qu'une derniere étape 😁</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Information personelle</p>
                <p>Merci de remplir tous les champs.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Nom</label>
                    <input
                      placeholder="Marvin Verthat"
                      type="text"
                      name="nom"
                      id="nom"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Adresse Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="iguanedemenagement@domain.com"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Adresse</label>
                    <input
                      type="text"
                      name="adresse"
                      id="adresse"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="13 rue vert chateau"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Ville</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Paris"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Code postale</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="number"
                        name="country"
                        id="country"
                        placeholder="91200"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">Téléphone</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="number"
                        name="state"
                        id="state"
                        placeholder="06 42 42 42 42"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRecap;
