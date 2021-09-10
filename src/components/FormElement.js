import React, { useState } from "react";

export default function FormElement({ formElements, setFormElements, index }) {
  const [elementValue, setElementValue] = useState(formElements[index].value);

  const onInputChange = (e) => {
    setElementValue(e.target.value);
    formElements[index].value = e.target.value;
    setFormElements(formElements);
  };

  const onDeleteClick = () => {
    setFormElements(formElements.filter(element=>{
      return element.key!==formElements[index].key
    }));
  };

  return (
    <div>
      <label>{formElements[index].type}</label>
      {formElements[index].type === "body" ? (
        <textarea value={elementValue} onChange={onInputChange} />
      ) : (
        <input type="text" value={elementValue} onChange={onInputChange} />
      )}
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
}
