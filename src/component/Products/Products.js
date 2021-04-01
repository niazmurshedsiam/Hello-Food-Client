import React from "react";

const Products = ({ product }) => {
  return (
    <div className="col-md-3">
      <img style={{ height: "300px" }} src={product.imageURL} alt="" />
      <h3 style={{margin:'20px',padding:'30px'}}>{product.name}</h3>
    </div>
  );
};

export default Products;
