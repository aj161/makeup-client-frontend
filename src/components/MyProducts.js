import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import UpdateProductModal from "./updateProductModal";
import { useAuth0 } from "@auth0/auth0-react";

function MyProducts(){
const [results, setResults] = useState([]);
const [showItems, setShowItems] = useState(false);
const [index, setIndex] = useState(0);
const [itemInfo, setItemInfo] = useState({});
const [updateModalStatus, setUpdateModalStatus] = useState(false);
const { user } = useAuth0();

useEffect(() => {
  const getProducts = async () => {
    let username = user.email||user.nickname;
    let resultProducts = await axios.get(`http://localhost:3001/products?username=${username}`);
    setResults(resultProducts.data);
    setShowItems(true);
  };
  getProducts();
}, []);

const deleteProduct = async (index) => {
  let username = user.email||user.nickname;
  let newProducts = await axios.delete(`http://localhost:3001/product/${index}?username=${username}`);
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