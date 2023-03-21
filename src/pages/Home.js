import Products from "./Products";
function Home(props) {
  function addToCart(product) {
    props.addToCart(product);
  }

  // console.log(props);
  return <Products dummyProduct={props.dummyProduct} addToCart={addToCart} />;
}

export default Home;
