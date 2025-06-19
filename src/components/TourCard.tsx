import React from "react";
import { CalendarIcon, FileIcon } from "./icons";

type Tour = {
  id: number;
  name: string;
  image: string;
  price: number;
  code: string; // Tour code
  country: string; // Country
  dateRange: string; // Date range
  range: string; // Available range
  link: string; // Link to PDF or more info
};

interface Props {
  tour: Tour;
}

const TourCard: React.FC<Props> = ({ tour }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col active:cursor-grabbing">
    {/* Image Section */}
    <div className="relative">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />

      {/* Date Range */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {tour.dateRange}
      </div>
    </div>

    {/* Tour Details */}
    <div className="p-4 flex flex-col flex-1">
      {/* Name */}
      <h2 className="text-lg font-bold">{tour.name}</h2>

      {/* Range */}
      <div className="flex font-semibold text-gray-500 text-sm mt-1 items-center">
        <CalendarIcon className="mr-1" />
        <span className="1">{tour.range}</span>
      </div>

      {/* Price */}
      <div className="mt-2 text-red-500 font-semibold text-lg text-right">
        {tour.price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <a
          href={tour.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          <FileIcon className="mr-2" />
          <span className="font-medium">PDF</span>
        </a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium">
          ข้อมูลเพิ่มเติม
        </button>
      </div>
    </div>
  </div>
);

export default TourCard;
