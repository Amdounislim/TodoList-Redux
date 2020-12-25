import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { Card, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import {addTask} from "../JS/actions/actionTask"

const AddTask = () => {
  const [myInput, setMyInput] = useState("");

  const dispatch = useDispatch()

  const add =(e)=>{
      e.preventDefault();
      dispatch(addTask({text:myInput , id: Date.now(), isDone:false }));
      setMyInput('')
  }

  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>To-Do-App !</h1>

        <Form onSubmit={add}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={myInput}
                onChange={(e) => setMyInput(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={add}>+</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        {/* <Button variant="info" className="mr-3" >isDone</Button> */}
      </Card.Body>
    </Card>
  );
};

export default AddTask;
