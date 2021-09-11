import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import FormElement from "./FormElement";
import useLocalStorage from "../util/UseLocalStorage";
import ButtonGroup from "./ButtonGroup";

/*
formElement{
  "type": "heading/image/body",
  "value": ""
}
*/

export default function Form() {
  const [formElements, setFormElements] = useLocalStorage("formElements", [
    {
      key: Math.random(),
      type: "heading",
      value: "",
    },
  ]);

  const onElementAdd = (type) => {
    setFormElements([
      ...formElements,
      {
        key: Math.random(),
        type,
        value: "",
      },
    ]);
  };

  const onClearClick = () => {
    setFormElements([]);
  };
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
        textAlign: "center",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      noValidate
      mt={4}
      autoComplete="off"
    >
      <h1>Generate your prehistoric website!</h1>
      <Stack spacing={2}>
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
        <div></div>
      </Stack>
      <Grid container sx={{ alignItems: "center" }} spacing={2}>
        <Grid item xs={3}>
          <Button variant="contained" color="error" onClick={onClearClick}>
            Clear All {<ClearIcon />}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup
            options={["heading", "image", "body"]}
            addElement={onElementAdd}
          />
        </Grid>
        <Grid item xs={4}>
          <Link to="generated-site" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success">
              Generate {<ArrowForwardIcon />}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
