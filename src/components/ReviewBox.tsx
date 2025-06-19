import React from "react";

interface Review {
  name: string;
  comment: string;
  rating: number; // Rating out of 5
  picture?: string; // Optional user picture
}

interface ReviewBoxProps {
  reviews: Review[]; // Array of customer reviews
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ reviews }) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <div className="flex items-center mb-2">
            <img
              src={
                review.picture ||
                "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg"
              }
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            {[...Array(5)].map((_, starIndex) => (
              <svg
                key={starIndex}
                xmlns="http://www.w3.org/2000/svg"
                fill={starIndex < review.rating ? "#FFD700" : "#E5E7EB"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.75.75 0 011.04 0l2.36 2.39 3.3.48a.75.75 0 01.42 1.28l-2.39 2.33.56 3.27a.75.75 0 01-1.09.79L12 12.347l-2.93 1.54a.75.75 0 01-1.09-.79l.56-3.27-2.39-2.33a.75.75 0 01.42-1.28l3.3-.48 2.36-2.39z"
                />
              </svg>
            ))}
          </div>
          <p className="text-gray-800 font-semibold">{review.name}</p>
          <p className="text-gray-600 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewBox;
