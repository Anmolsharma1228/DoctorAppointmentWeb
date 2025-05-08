import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <form className="bg-white shadow-2xl rounded-xl w-[90%] max-w-[900px] mx-auto p-5">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="firstName" className="mb-1 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="lastName" className="mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="phone" className="mb-1 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="email" className="mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="address1" className="mb-1 font-semibold">Address Line 1</label>
            <input
              type="text"
              name="address1"
              id="address1"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="address2" className="mb-1 font-semibold">Address Line 2</label>
            <input
              type="text"
              name="address2"
              id="address2"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="city" className="mb-1 font-semibold">City</label>
            <input
              type="text"
              name="city"
              id="city"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="state" className="mb-1 font-semibold">State</label>
            <input
              type="text"
              name="state"
              id="state"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="zip" className="mb-1 font-semibold">Zip</label>
            <input
              type="text"
              name="zip"
              id="zip"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        <div className="text-center cursor-pointer">
        <button className="bg-[#7A1CAC] px-3 py-1 text-white font-semibold rounded-sm my-5">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
