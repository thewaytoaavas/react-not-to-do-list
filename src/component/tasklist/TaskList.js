import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import FormRow from "../form/FormRow";

function TaskList() {
  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">TaskList</h2>left
        </Col>
        <hr />

        {/* This table is for Task List  */}
        <Table striped hover>
          <tbody>
            <FormRow />
          </tbody>
        </Table>
        <Col md="6">
          <h2 className="text-center">BadList</h2>right
        </Col>
      </Row>
    </div>
  );
}

export default TaskList;
