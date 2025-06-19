import React from "react";

type Tour = {
  id: number;
  name: string;
  image: string;
  price: number;
  code: string; // Tour code
  zone: string; // Zone
  dateRange: string; // Date range
};

interface Props {
  tour: Tour;
}

const TourCard: React.FC<Props> = ({ tour }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col cursor-pointer active:cursor-grabbing">
    {/* Image Section */}
    <div className="relative">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />
    </div>

    {/* Tour Details */}
    <div className="p-4 flex flex-col flex-1">
      {/* Name */}
      <h2 className="text-lg font-bold">{tour.name}</h2>

      {/* Tour Code */}
      <p className="text-gray-500 text-sm mt-1">Code: {tour.code}</p>

      {/* Zone */}
      <p className="text-gray-500 text-sm mt-1">Zone: {tour.zone}</p>

      {/* Date Range */}
      <p className="text-gray-500 text-sm mt-1">Date Range: {tour.dateRange}</p>

      {/* Price */}
      <div className="mt-2 text-green-600 font-semibold text-lg">
        ${tour.price.toFixed(2)}
      </div>
    </div>
  </div>
);

export default TourCard;
