require("dotenv").config();

module.exports = {
  env: {
    GOOGLE_MAPS_APIKEY: process.env.GOOGLE_MAPS_APIKEY,
  },
  images: {
    domains: ["https://tailwindui.com"],
    domains: ["https://images.unsplash.com"],
  },
  reactStrictMode: true,
};
