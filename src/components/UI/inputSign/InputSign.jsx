import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import cl from "./InputSign.module.css";
export default function InputSign({ onChange, value, label, id, type, autoComplete }) {
  return (
    <Box
      style={{ width: "100%" }}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
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
      </div>
    </Box>
  );
}
