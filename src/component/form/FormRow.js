import React from "react";
import { Button, Form } from "react-bootstrap";

function FormRow() {
  return (
    <tr>
      <td>
        <Form.Check type="checkbox" label="Check me out" />
      </td>
      <td>task name</td>
      <td>10 hr</td>
      <td>
        <Button variant="danger">
          <i class="fa-solid fa-trash-can"></i>
        </Button>{" "}
        <Button variant="primary">
          <i class="fa-solid fa-arrow-right-long"></i>
        </Button>
      </td>
    </tr>
  );
}

export default FormRow;
