import React from "react";
import TourCard from "../components/TourCard";
import DefaultLayout from "@/layouts/default";
import tourTrips from "@/data/tourTrips";

const ProductPage: React.FC = () => (
  <DefaultLayout>
    <div className="max-w-5xl mx-auto pb-8 px-4">
      <div className="relative w-full h-auto mb-6">
        <img
          src="https://t3.ftcdn.net/jpg/09/02/49/92/240_F_902499266_ck2IrwLntmdgGuGDs2zxsrXTJuEOR5ZR.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-3/4">
            <p className="text-lg font-semibold mb-2">
              ค้นพบทัวร์มากมายไปกับเรา
            </p>
            <input
              type="text"
              placeholder="ค้นหาทัวร์..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">ทัวร์แนะนำในช่วงนี้</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tourTrips.map((trip) => (
          <TourCard key={trip.id} tour={trip} />
        ))}
      </div>
    </div>
  </DefaultLayout>
);

export default ProductPage;
