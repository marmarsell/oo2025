import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";

function SingleProduct() {
  const{productId} = useParams();
  const[ product, setProduct ] = useState<Product>();

  // uef
  useEffect(() => {
    fetch("http://localhost:8080/products/" + productId)
        .then(res => res.json())
        .then(json => setProduct(json));
  }, []);

  return (
    <div>
        <div>Nimi: {product?.name}</div>
        <div>Hind: {product?.name}</div>
        <div>Jaos: {product?.category?.name}</div>
        
    </div>
  )
}

export default SingleProduct