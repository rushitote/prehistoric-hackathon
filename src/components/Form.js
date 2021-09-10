import React, { useState } from "react";
import FormElement from "./FormElement";
import Button from "./Button";


/*
formElement{
  "type": "heading/image/body",
  "value": ""
}
*/

export default function Form() {
  const [formElements, setFormElements] = useState([
    {
      key: Math.random(),
      type: "heading",
      value: "heading",
    },
    {
      key: Math.random(),
      type: "body",
      value: "body",
    },
  ]);

  const onElementAdd = (type) => {
    setFormElements([
      ...formElements,
      {
        key: Math.random(),
        type,
        value: ""
      },
    ]);
  };
  return (
    <div>
      {formElements.map((element, index) => {
        return (
          <FormElement
            formElements={formElements}
            key={element.key}
            setFormElements={setFormElements}
            index={index}
          />
        );
      })}
      <Button type="heading" onElementAdd={onElementAdd}/>
      <Button type="body"  onElementAdd={onElementAdd}/>
      <Button type="image"  onElementAdd={onElementAdd}/>
    </div>
  );
}
