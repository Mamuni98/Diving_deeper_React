import React, {} from "react";
import Card from "../UI/Card";
import classes from "./ProductPrice.module.css"

const ProductPrice = (props) => {

  return (
    <Card className={classes.price}>
      <div>Total Value Worth of Products: Rs.{props.price}</div>
    </Card>
  );
};

export default ProductPrice;
