import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import UpdateProductModal from "./updateProductModal";

function MyProducts(){
const [results, setResults] = useState([]);
const [showItems, setShowItems] = useState(false);
const [index, setIndex] = useState(0);
const [itemInfo, setItemInfo] = useState({});
const [updateModalStatus, setUpdateModalStatus] = useState(false);

useEffect(() => {
  const getProducts = async () => {
    let resultProducts = await axios.get(`http://localhost:3001/products`);
    setResults(resultProducts.data);
    setShowItems(true);
  };
  getProducts();
}, []);

const deleteProduct = async (index) => {
  let newProducts = await axios.delete(`http://localhost:3001/product/${index}`);
  setResults(newProducts.data);
};

const showUpdateModal = async(chosenItem) =>{
  setUpdateModalStatus(true);
  setItemInfo(chosenItem);
  setIndex(chosenItem._id);
}

const hideUpdateModal = () =>{
  setUpdateModalStatus(false);
}

const updateProducts = (results) => {
  setResults(results);
}

  return(
    <>
    <h1>This is Products Page</h1>
    <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => (
            <Product
            key={index}
            item={item}
            deleteProduct={deleteProduct}
            showUpdateModal={showUpdateModal}
          />
          ))}
          {!showItems && <p>No products to show</p>}

          <UpdateProductModal
          show={updateModalStatus}
          hideUpdateModal={hideUpdateModal}
          itemInfo={itemInfo}
          itemIndex={index}
          updateProducts={updateProducts}
                    />
      </div>
    </>

  )
}

export default MyProducts;