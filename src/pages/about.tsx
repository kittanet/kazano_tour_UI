import DefaultLayout from "@/layouts/default";

const AboutPage = () => {
  return (
    <DefaultLayout>
      <div className="font-sans p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Welcome to Kazano Tour! We are dedicated to providing the best
            travel experiences.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="mt-2">Email: contact@kazanotour.com</p>
          <p>Tel: +1-234-567-890</p>
          <p>Address: 123 Travel Lane, Adventure City, World</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
