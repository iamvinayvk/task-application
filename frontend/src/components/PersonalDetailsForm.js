import React, { useState } from "react";

const PersonalDetailsForm = ({ changeHandler, state, nextStep }) => {
  // state.page=1;
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      state.fname === "" ||
      state.lname === "" ||
      state.age === "" ||
      state.mobno === ""
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
            Personal Details
          </h4>
          {error && (
            <h5 className="text-red-500 text-xl">
              Please fill all the entries.
            </h5>
          )}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fname"
            >
              First Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={state.fname}
              onChange={changeHandler("fname")}
              id="fname"
              type="text"
              placeholder="Enter First Name..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="lname"
            >
              Last Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lname"
              type="text"
              value={state.lname}
              onChange={changeHandler("lname")}
              placeholder="Enter Last Name..."
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
              Age
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              value={state.age}
              onChange={changeHandler("age")}
              type="text"
              placeholder="Enter Age..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="text"
            >
              Enter Phone Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Enter Phone Number..."
              value={state.mobno}
              onChange={changeHandler("mobno")}
            />
          </div>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={submitHandler}
          >
            Proceed to Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
