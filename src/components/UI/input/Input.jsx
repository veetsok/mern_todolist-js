import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import cl from "./Input.module.css";
import ButtonInput from "../buttonInput/ButtonInput";
export default function Input({
  onSubmit,
  onChange,
  value,
  label,
  id,
  type,
  autoComplete,
}) {
  return (
    <Box
      style={{ width: "100%" }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <div className={cl.block}>
        <TextField
          className={cl.input}
          id={id}
          value={value}
          label={label}
          type={type}
          onChange={onChange}
          autoFocus
          autoComplete={autoComplete}
        />

        <ButtonInput className={cl.btn} />
      </div>
    </Box>
  );
}
