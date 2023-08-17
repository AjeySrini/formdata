// App.tsx
import React, { useState } from "react";
import FormComponent from "./FormComponent";

const initialValues = {
  date: "2023-08-17",
  source: "Sample Source",
  jobid: "12345",
  techname: "John Doe"
};

const App: React.FC = () => {
  const [techContact, setTechContact] = useState("");
  const [hasRemark, setHasRemark] = useState(true); // Default value is false
  const [remarks, setRemarks] = useState("");

  const handleTechContactChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setTechContact(value);
  };

  const handleHasRemarkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value === "yes";
    setHasRemark(value);
    if (!value) {
      setRemarks(""); // Clear the remarks field when "no" is selected
    }
  };

  const handleRemarksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRemarks(value);
  };

  const isSubmitEnabled = techContact !== "" && (!hasRemark || remarks !== "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormComponent
          initialValues={initialValues}
          techContact={techContact}
          onTechContactChange={handleTechContactChange}
          hasRemark={hasRemark}
          onHasRemarkChange={handleHasRemarkChange}
          remarks={remarks}
          onRemarksChange={handleRemarksChange}
        />
        <button type="submit" disabled={!isSubmitEnabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
