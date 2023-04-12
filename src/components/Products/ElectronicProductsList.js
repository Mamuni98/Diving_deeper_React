import React from "react";

import Card from "../UI/Card";
import classes from "./ProductsList.module.css";
import Product from "./Product";


const ElectronicProductsList = (props) => {
  
  return (
    <Card className={classes.products}>
      <ul><h3>Electronic Items</h3>
        {props.products.map((product) => (
          <Product
            key={product.key_id}
            id={product.id}
            price={product.price}
            name={product.name}
            catagory={product.catagory}
            // onDelete = {props.onDeleteProduct}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ElectronicProductsList;
