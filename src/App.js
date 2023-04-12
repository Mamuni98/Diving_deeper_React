import React, { Fragment, useContext } from "react";
import ElectronicProductsList from "./components/Products/ElectronicProductsList";
import FoodProductsList from "./components/Products/FoodProductsList";
import SkincareProductsList from "./components/Products/SkincareProductsList";
import AddProduct from "./components/Products/AddProduct";
import ProductPrice from "./components/Products/ProductsPrice";
import AuthContext from "./store/auth-context"; 
function App() {
  // const [electronicItemsList, setElectronicItemsList] = useState([]);
  // const [foodItemsList, setFoodItemsList] = useState([]);
  // const [skincareItemsList, setSkincareItemsList] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(Number(0));

  // const addProductHandler = (pId, pPrice, pName, pCatagory) => {
  //   const productDetail = {
  //     id: pId,
  //     price: pPrice,
  //     name: pName,
  //     catagory: pCatagory,
  //     key_id: Math.random().toString(),
  //   };
  //   if (pCatagory === "Electronic") {
  //     setElectronicItemsList((prevProductsList) => {
  //       return [...prevProductsList, productDetail];
  //     });
  //   }
  //   else if(pCatagory === "Food"){
  //     setFoodItemsList((prevProductsList) => {
  //       return [...prevProductsList, productDetail];
  //     });
  //   }
  //   else {
  //     setSkincareItemsList((prevProductsList) => {
  //       return [...prevProductsList, productDetail];
  //     });
  //   }

  //   localStorage.setItem(pId, JSON.stringify(productDetail));

  //   setTotalPrice((prevTotalPrice) => {
  //     const finalPrice = Number(prevTotalPrice) + Number(pPrice);
  //     return finalPrice;
  //   });
  // };

  // const deleteProductHandler = (productId, productPrice, productCatagory) => {
  //   if(productCatagory === "Electronic"){
  //     setElectronicItemsList((prevProductsList) => {
  //       return prevProductsList.filter((product) => product.id !== productId);
  //     });
  //   }
  //   else if (productCatagory === "Food"){
  //     setFoodItemsList((prevProductsList) => {
  //       return prevProductsList.filter((product) => product.id !== productId);
  //     });
  //   }
  //   else {
  //     setSkincareItemsList((prevProductsList) => {
  //       return prevProductsList.filter((product) => product.id !== productId);
  //     });
  //   }
   

  //   localStorage.removeItem(productId);

  //   setTotalPrice((prevTotalPrice) => {
  //     const finalPrice = Number(prevTotalPrice) - Number(productPrice);
  //     return finalPrice;
  //   });
  // };
  const authCntxt = useContext(AuthContext);
  return (
    <Fragment>
      <AddProduct/>
      <ElectronicProductsList
        products={authCntxt.electronicItemsList}
      />
      <FoodProductsList
        products={authCntxt.foodItemsList}
      />
      <SkincareProductsList
        products={authCntxt.skincareItemsList}
      />
      <ProductPrice price={authCntxt.totalPrice} />
    </Fragment>
  );
}

export default App;
