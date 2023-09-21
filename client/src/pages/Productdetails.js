import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.error("Error fetching product:", error);
      // You might want to handle the error here (e.g., display an error message)
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
    //eslint-disable-next-line
  }, [params?.slug]);

  const title = params?.slug
    ? `${params.slug} Details - Ecommerce App`
    : "Product Details - Ecommerce App";

  return (
    <Layout title={title}>
      <div className="row container mt-2">
        <div className="col-md-6">
          {product && (
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              height="300"
              width={"350px"}
            />
          )}
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <div className="row">Similar products</div>
    </Layout>
  );
};

export default Productdetails;
