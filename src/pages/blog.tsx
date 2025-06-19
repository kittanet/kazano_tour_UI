import React from "react";
import DefaultLayout from "@/layouts/default";

const BlogPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Blog Post */}
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="border rounded-lg shadow bg-white overflow-hidden flex flex-col"
            >
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&q=80"
                  className="w-3/4 h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Post Title {id}</h2>
                  <p className="text-gray-600 text-sm">June 19, 2025</p>
                  <p className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada.
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;
