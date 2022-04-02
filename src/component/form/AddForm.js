import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

function AddForm() {
  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col xs={7}>
            <Form.Control name="task" placeholder="task..." />
          </Col>
          <Col md={3}>
            <Form.Control placeholder="hour..." type="number" />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddForm;
