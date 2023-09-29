import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const param = useParams();
  const navigate = useNavigate();

  const getCatrgoryByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/prodict-category/${param.slug}`
      );
      setProduct(data?.products);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (param?.slug) getCatrgoryByCat();
    //eslint-disable-next-line
  }, [param?.slug]);
  return (
    <Layout title={`${param?.slug} - Ecommerce App`}>
      <div className="container mt-5">
        <h4 className="text-center">Category - {categories?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>
        <div className="row">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">${p.price}</p>
                  <button
                    class="btn btn-primary mb-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button class="btn btn-secondary">ADD TO CARD</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
