import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.imageUrl} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Title>{props.item.brand}</Card.Title>
        <Card.Title>{props.item.price}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <Button variant="primary" onClick={()=>props.deleteProduct(props.item._id)}>Delete</Button>
        <Button variant="primary" onClick={()=> props.showUpdateModal(props.item)}>Update</Button> 
      </Card.Body>
    </Card>
  );
}

export default Product;