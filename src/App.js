import React, { useState } from "react";
import Form from "./Component/Form"; // Import your Form component here

function App() {
  const [showForm, setShowForm] = useState(true); // Initial state: form is visible

  // Function to toggle the visibility of the form
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm ? (
        <Form toggleFormVisibility={toggleFormVisibility} />
      ) : (
        <div>
          {/* Content to show after form submission */}
          <h2>Thank you for submitting the form!</h2>
          <p>Any additional content you want to display.</p>
        </div>
      )}
    </div>
  );
}

export default App;
