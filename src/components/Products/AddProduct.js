import React, { useState, Fragment, useContext } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddProduct.module.css";
import AuthContext from "../../store/auth-context";

const AddProduct = () => {
  const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredProductPrice, setEnteredProductPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredProductCatagory, setEnteredProductCatagoty] = useState("Electronic");

  const [error, setError] = useState();
  const cntxt = useContext(AuthContext);

  const productIdHandler = (event) => {
    setEnteredProductId(event.target.value);
  };
  const productPriceHandler = (event) => {
    setEnteredProductPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setEnteredProductName(event.target.value);
  };
  const productCatagoryHandler = (event) => {
    setEnteredProductCatagoty(event.target.value);
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    if (
      enteredProductId.trim().length === 0 ||
      enteredProductPrice.trim().length === 0 ||
      enteredProductName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name, price and college name (non-empty values).",
      });
      return;
    }
    if (+enteredProductPrice < 1) {
      setError({
        title: "Invalid Price",
        message: "Please enter a valid Price (> 0).",
      });
      return;
    }
    cntxt.onAddProduct(
      enteredProductId,
      enteredProductPrice,
      enteredProductName,
      enteredProductCatagory
    );
    setEnteredProductId("");
    setEnteredProductPrice("");
    setEnteredProductName("");
    setEnteredProductCatagoty("Electronic");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addProductHandler}>
          <label htmlFor="Product ID">Product ID</label>
          <input
            id="Product ID"
            type="text"
            onChange={productIdHandler}
            value={enteredProductId}
          />
          <label htmlFor="Selling Price">Selling Price</label>
          <input
            id="Selling Price"
            type="number"
            onChange={productPriceHandler}
            value={enteredProductPrice}
          />
          <label htmlFor="Product Name">Product Name</label>
          <input
            id="Product Name"
            type="text"
            onChange={productNameHandler}
            value={enteredProductName}
          />
          <label for="catagoty">Choose a Catagory:</label>
          <select
            name="catagory"
            id="catagory"
            onChange={productCatagoryHandler}
            value={enteredProductCatagory}
          >
            <option>Electronic</option>
            <option>Food</option>
            <option>Skincare</option>
          </select>
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddProduct;
