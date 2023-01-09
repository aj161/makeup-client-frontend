import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function UpdateProductModal(props){

  const updateProductInfo = async (e) => {
    e.preventDefault();
    const newProductData = {
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      imageUrl: e.target.imageUrl.value,
      description: e.target.description.value,
    };

    const resultsUpdate = await axios.put(`http://localhost:3001/product/${props.itemIndex}`, newProductData);
    props.hideUpdateModal();
    props.updateProducts(resultsUpdate.data)
  };

  return(
    <Modal show={props.show} onHide={props.hideUpdateModal}>
    <Modal.Header closeButton>
      <Modal.Title>Update Product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={updateProductInfo}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.name}
            type="text"
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Level</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.brand}
            type="text"
            name="level"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.price}
            type="number"
            name="price"
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.imageUrl}
            type="text"
            name="imageUrl"
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Decription</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.description}
            type="text"
            name="description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Item
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.hideUpdateModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )

}

export default UpdateProductModal;