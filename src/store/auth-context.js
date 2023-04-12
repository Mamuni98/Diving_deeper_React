import React, { useState } from "react";

const AuthContext = React.createContext({
  electronicItemsList: [],
  foodItemsList: [],
  skincareItemsList: [],
  totalPrice: Number(0),
  onAddProduct: () => {},
  onDeleteProduct: () => {},
});

export const AuthContextProvider = (props) => {
  const [electronicItemsList, setElectronicItemsList] = useState([]);
  const [foodItemsList, setFoodItemsList] = useState([]);
  const [skincareItemsList, setSkincareItemsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number(0));

  const addProductHandler = (pId, pPrice, pName, pCatagory) => {
    const productDetail = {
      id: pId,
      price: pPrice,
      name: pName,
      catagory: pCatagory,
      key_id: Math.random().toString(),
    };
    if (pCatagory === "Electronic") {
      setElectronicItemsList((prevProductsList) => {
        return [...prevProductsList, productDetail];
      });
    } else if (pCatagory === "Food") {
      setFoodItemsList((prevProductsList) => {
        return [...prevProductsList, productDetail];
      });
    } else {
      setSkincareItemsList((prevProductsList) => {
        return [...prevProductsList, productDetail];
      });
    }

    localStorage.setItem(pId, JSON.stringify(productDetail));

    setTotalPrice((prevTotalPrice) => {
      const finalPrice = Number(prevTotalPrice) + Number(pPrice);
      return finalPrice;
    });
  };

  const deleteProductHandler = (productId, productPrice, productCatagory) => {
    if (productCatagory === "Electronic") {
      setElectronicItemsList((prevProductsList) => {
        return prevProductsList.filter((product) => product.id !== productId);
      });
    } else if (productCatagory === "Food") {
      setFoodItemsList((prevProductsList) => {
        return prevProductsList.filter((product) => product.id !== productId);
      });
    } else {
      setSkincareItemsList((prevProductsList) => {
        return prevProductsList.filter((product) => product.id !== productId);
      });
    }

    localStorage.removeItem(productId);

    setTotalPrice((prevTotalPrice) => {
      const finalPrice = Number(prevTotalPrice) - Number(productPrice);
      return finalPrice;
    });
  };
  return (
    <AuthContext.Provider
      value={{
        electronicItemsList: electronicItemsList,
        foodItemsList: foodItemsList,
        skincareItemsList: skincareItemsList,
        totalPrice: totalPrice,
        onAddProduct: addProductHandler,
        onDeleteProduct: deleteProductHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;