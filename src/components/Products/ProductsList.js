import React from "react";

import Card from "../UI/Card";
import classes from "./ProductsList.module.css";
import Product from "./Product";

const UsersList = (props) => {
  return (
    <Card className={classes.products}>
      <ul>
        {props.products.map((product) => (
          <Product
            key={product.key_id}
            id={product.id}
            price={product.price}
            name={product.name}
            onDelete = {props.onDeleteProduct}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
