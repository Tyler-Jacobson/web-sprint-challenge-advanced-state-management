import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs, createSmurf } from "../actions/smurfAction";
import Form from "./Form"

const initialFormValues = {
  name: "",
  age: 85,
  height: ""
}

function App(props) {

  const [ formValues, setFormValues ] = useState(initialFormValues)

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const inputChange = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const onSubmit = function(event) {
    event.preventDefault();
    props.createSmurf(formValues)
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Fuck smurfs. All my homies hate smurfs</h1>
      <Form formValues={formValues} inputChange={inputChange} onSubmit={onSubmit}/>

      {props.smurfs.map((smurf) => {
        return (
          <div className="smurf">
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);
