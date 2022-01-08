import React from "react";
import ProductForm from "./components/product-from";
import ProductList from "./components/products-list";
import "./app.css"

const App = () => (
  <main className="container">
    <ProductForm />
    <ProductList />
  </main>
);

export default App;
