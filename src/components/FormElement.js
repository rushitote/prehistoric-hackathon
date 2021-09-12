import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FormElement({ formElements, setFormElements, index }) {
  const [elementValue, setElementValue] = useState(formElements[index].value);

  const onInputChange = (e) => {
    setElementValue(e.target.value);
    formElements[index].value = e.target.value;
    setFormElements(formElements);
  };

  const onDeleteClick = () => {
    setFormElements(
      formElements.filter((element) => {
        return element.key !== formElements[index].key;
      })
    );
  };

  return (
    <div>
      {/* <label>{formElements[index].type}</label> */}
      <Grid container sx={{ alignItems: "center" }} spacing={2}>
        <Grid item xs={11}>
          {formElements[index].type === "body" ? (
            <TextField
              id="outlined-multiline-flexible"
              label="Body Text"
              multiline
              maxRows={15}
              value={elementValue}
              onChange={onInputChange}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label={
                formElements[index].type === "image" ? "Image Link" : "Heading"
              }
              variant="outlined"
              value={elementValue}
              onChange={onInputChange}
            />
          )}
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete" onClick={onDeleteClick}>
            <DeleteIcon sx={{ color: "red", fontSize: 30 }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
