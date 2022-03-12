import React from "react";

const LoanDetailsForm = ({ changeHandler, state, nextStep, prevStep }) => {
  //   state.page = 3;
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
  const submitForm = () => {};
  return (
    <div className="w-full h-full">
      <div className="flex justify-center h-full">
        <div className="block p-6 rounded-lg shadow-lg bg-white h-5/6 w-2/3">
          <h4 className="text-gray-900 text-3xl leading-tight font-medium mb-2">
            Loan Details
          </h4>
          {error && (
            <h5 className="text-red-500 text-xl">
              Please fill all the entries.
            </h5>
          )}
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="loanamount"
            >
              Loan Amount
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="loanamount"
              type="number"
              value={state.loanamount}
              onChange={changeHandler("loanamount")}
              placeholder="Enter Loan Amount..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="loaninterest"
            >
              Enter Loan Interest
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              value={state.loaninterest}
              onChange={changeHandler("loaninterset")}
              placeholder="Enter Loan Interest..."
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="loantenure"
            >
              Enter Loan Tenure
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="GSTnumber"
              type="text"
              value={state.loantenure}
              onChange={changeHandler("loantenure")}
              placeholder="Enter Loan Tenure..."
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
            onClick={nextStep}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsForm;
