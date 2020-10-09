import React from "react"

function Form(props) {
    const { formValues, inputChange, onSubmit} = props;

    function onInputChange(e) {
        const { name, value } = e.target;
        inputChange(name, value)
    }
  return (
    <form onSubmit={onSubmit}>
      <span>Name: </span>
      <input
        type="text"
        name="name"
        onChange={onInputChange}
        value={formValues.name}
      />
      <br />
      <span>Age: </span>
      <input
        type="text"
        name="age"
        onChange={onInputChange}
        value={formValues.age}
      />
      <br />
      <span>Height: </span>
      <input
        type="text"
        name="height"
        onChange={onInputChange}
        value={formValues.height}
      />
      <br />
      <button>Add Smurf</button>
    </form>
  );
}

export default Form