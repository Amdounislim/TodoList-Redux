import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { deleteTask, doneTask } from "../JS/actions/actionTask";

const ListItem = () => {
  const items = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {items.map((el, i) => (
        <ListGroup.Item
          style={{ display: "flex", alignItems: "flex-end" }}
          key={i}
        >
          <Button variant="secondary" onClick={() => dispatch(doneTask(el.id))}>
            {el.isDone?"UnDone":"isDone"}
          </Button>
          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={() => dispatch(deleteTask(el.id))}>
            Delete
          </Button>
          <p style={{ margin: "0px" }} className={el.isDone ? "done" : ""}>
            {el.text}
          </p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItem;
