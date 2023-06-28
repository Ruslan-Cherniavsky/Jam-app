import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function JemmersRow(props: any) {
  const { country, age, city, email, firstName, gender, lastName } = props;

  return (
    <>
      <tr>
        <td>{country}</td>
        <td>{age}</td>
        <td>{city}</td>
        <td>{email}</td>
        <td>{firstName}</td>
        <td>{gender}</td>
        <td>{lastName}</td>
      </tr>
    </>
  );
}

export { JemmersRow };
