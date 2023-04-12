import React, {useContext} from "react";
import classes from "./Product.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import AuthContext from "../../store/auth-context";
const Product = (props) => {
  const cntxt = useContext(AuthContext);
  const deleteHandler = () => {
    cntxt.onDeleteProduct(props.id, props.price, props.catagory);
  };
  return (
    <Card className={classes.products}>
      <li>
        {props.id} - {props.catagory} - {props.name} - {props.price}
        <Button onClick={deleteHandler}>Delete Product</Button>
      </li>
    </Card>
  );
};
export default Product;
