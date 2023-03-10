import Products from "./Products";
function Home(props) {
  // console.log(props);
  return <Products dummyProduct={props.dummyProduct} />;
}

export default Home;
