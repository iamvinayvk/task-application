import { useState } from "react";
import "./App.css";
import BusinessDetailsForm from "./components/BusinessDetailsForm";
import Form from "./components/Form";
import Header from "./components/Header";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

function App() {
  const [state, setState] = useState({
    page: 1,
    fname: "",
    lname: "",
    age: "",
    mobno: "",
    businessName: "",
    businessAddress: "",
    GSTno: "",
    loantenure: "",
    loanamount: "",
    loaninterest: "",
  });
  const changeHandler = (input) => (e) => {
    console.log(state);
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  const nextStep = () => {
    const { page } = state;
    setState((prevState) => ({
      ...prevState,
      page: page + 1,
    }));
  };
  const prevStep = () => {
    const { page } = state;
    setState((prevState) => ({
      ...prevState,
      page: page - 1,
    }));
  };
  return (
    <div className="App h-screen">
      <div className="h-1/6">
        <Header />
      </div>
      <div className="flex justify-center items-center h-5/6 w-full mb-4">
        <Form
          changeHandler={changeHandler}
          state={state}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </div>
  );
}

export default App;
