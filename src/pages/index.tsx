import React from "react";
import TourCard from "../components/TourCard";
import DefaultLayout from "@/layouts/default";
import tourTrips from "@/data/tourTrips";
import ReviewBox from "@/components/ReviewBox";
import FAQ from "@/components/FAQ";

const ProductPage: React.FC = () => (
  <DefaultLayout>
    <div className="max-w-5xl mx-auto pb-8 px-4">
      <div className="relative w-full h-auto mb-6">
        <img
          src="https://i.ibb.co/27HMWHkG/istockphoto-1401102782-612x612-1-1.jpg"
          alt="Banner"
          className="w-full h-auto"
        />
        <div className="absolute top-1/4 inset-x-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-3/4">
            <p className="text-lg font-semibold mb-2">
              ค้นพบทัวร์มากมายไปกับเรา
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="ค้นหาทัวร์..."
                className="w-full p-3 border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-3 bg-blue-500 text-white rounded-r-md border-1 border-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                ค้นหา
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 mb-6">
        <h1 className="text-3xl font-semibold">ทัวร์แนะนำในช่วงนี้</h1>
        <button className="p-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          ดูทั้งหมด
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tourTrips.map((trip) => (
          <TourCard key={trip.id} tour={trip} />
        ))}
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <ReviewBox
        reviews={[
          { name: "John Doe", comment: "Amazing experience!", rating: 5 },
          {
            name: "Jane Smith",
            comment: "Loved the tour, highly recommend!",
            rating: 4,
          },
          {
            name: "Alice Brown",
            comment: "Great service and friendly staff.",
            rating: 5,
          },
        ]}
      />

      <hr className="my-8 border-t border-gray-300" />

      <FAQ />
    </div>
  </DefaultLayout>
);

export default ProductPage;
