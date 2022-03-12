import React, { useState } from "react";

const BusinessDetailsForm = ({ changeHandler, state, nextStep, prevStep }) => {
  // state.page = 2;
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      state.businessName === "" ||
      state.businessAddress === "" ||
      state.GSTno === ""
    ) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-center h-full">
        <div className="block p-6 rounded-lg shadow-lg bg-white h-5/6 w-2/3">
          <h4 className="text-gray-900 text-3xl leading-tight font-medium mb-2">
            Business Details
          </h4>
          {error && (
            <h5 className="text-red-500 text-xl">
              Please fill all the entries.
            </h5>
          )}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="bname"
            >
              Business Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bname"
              type="text"
              value={state.businessName}
              onChange={changeHandler("businessName")}
              placeholder="Enter Business Name..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="address"
            >
              Enter Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              value={state.businessAddress}
              onChange={changeHandler("businessAddress")}
              placeholder="Enter Address..."
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="GSTnumber"
            >
              Enter GST Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="GSTnumber"
              type="text"
              value={state.GSTno}
              onChange={changeHandler("GSTno")}
              placeholder="Enter GST Number..."
            />
          </div>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={submitHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsForm;
