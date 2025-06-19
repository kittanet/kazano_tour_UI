import React from "react";
import TourCard from "../components/TourCard";
import DefaultLayout from "@/layouts/default";
import tourTrips from "@/data/tourTrips";

const ProductPage: React.FC = () => (
  <DefaultLayout>
    <div className="max-w-5xl mx-auto pb-8 px-4">
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
