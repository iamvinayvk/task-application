import React from "react";
import BusinessDetailsForm from "./BusinessDetailsForm";
import LoanDetailsForm from "./LoanDetailsForm";
import PersonalDetailsForm from "./PersonalDetailsForm";

const Form = ({ changeHandler, state, nextStep, prevStep }) => {
  switch (state.page) {
    case 1:
      return (
        <PersonalDetailsForm
          changeHandler={changeHandler}
          state={state}
          nextStep={nextStep}
        />
      );

    case 2:
      return (
        <BusinessDetailsForm
          changeHandler={changeHandler}
          state={state}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <LoanDetailsForm
          changeHandler={changeHandler}
          state={state}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );

    default:
      return (
        <PersonalDetailsForm
          changeHandler={changeHandler}
          state={state}
          nextStep={nextStep}
        />
      );
  }
  return {};
};

export default Form;
