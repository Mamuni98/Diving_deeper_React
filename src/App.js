import React, { useState, Fragment } from 'react';
import ProductsList from './components/Products/ProductsList';
import AddProduct from './components/Products/AddProduct';
import ProductPrice from './components/Products/ProductsPrice';

function App() {
  const [productsList, setProductsList] = useState([]);
  const[totalPrice, setTotalPrice] = useState(Number(0));

  const addUserHandler = (pId, pPrice, pName) => {
    const productDetail = {id: pId, price: pPrice, name: pName, key_id: Math.random().toString()}
    setProductsList((prevProductsList) => {
      return [
        ...prevProductsList, productDetail
      ];
    });
     
    localStorage.setItem(pId, JSON.stringify(productDetail));

    setTotalPrice((prevTotalPrice) => {
      const finalPrice = Number(prevTotalPrice)+Number(pPrice);
      return finalPrice;
    });
  };


  const deleteProductHandler = (productId, productPrice) => {
    setProductsList((prevProductsList) => {
      return prevProductsList.filter(product => product.id !== productId)
    });

    localStorage.removeItem(productId);

    setTotalPrice((prevTotalPrice) => {
      const finalPrice = Number(prevTotalPrice)-Number(productPrice);
      return finalPrice;
    });
  }

  return (
    <Fragment>
      <AddProduct onAddProduct={addUserHandler}/>
      <ProductsList products={productsList} onDeleteProduct={deleteProductHandler} />
      <ProductPrice price={totalPrice}/>
    </Fragment>
  );
}

export default App;
