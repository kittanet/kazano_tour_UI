import React from "react";
import DefaultLayout from "@/layouts/default";

const ContactPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default ContactPage;
