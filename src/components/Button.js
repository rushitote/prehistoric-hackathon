import React from "react";
import Button from '@mui/material/Button';

// icon button
export default function btn({onElementAdd, type}) {
  const onAdd = ()=>{
    onElementAdd(type)
  }

  return (
    <Button variant="contained" onClick={onAdd}>Add {type}</Button>
  );
}
