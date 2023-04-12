import React from "react";
import classes from "./Product.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const Product = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id, props.price);
  };
  return (
    <Card className={classes.products}>
      <li>
        {props.id} - {props.name} - {props.price}
        <Button onClick={deleteHandler}>Delete Product</Button>
      </li>
    </Card>
  );
};
export default Product;
