import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Grid from "./components/Grid";


const App = () => {

  return (
    <div>
      <ToastContainer />
      <Form />
      <Grid />
    </div>
  );
};

export default App;
