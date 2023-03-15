import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";

function Products(props) {
  // console.log();

  function showproduct(id) {
    console.log(`第${id}個商品`);
  }
  return (
    <Row>
      {props.dummyProduct?.map((product) => {
        return (
          <Col xs={6} md={4} lg={3} key={product.id}>
            <Card className={`m-3 ${classes.card}`}>
              <Link to={`/product/${product.title}`}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
              </Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>NT$ {product.price}</Card.Text>
                <Button
                  variant="primary"
                  className={classes.rwdbutton}
                  onClick={() => showproduct(product.id)}
                >
                  加入購物車
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Products;
