import { useEffect, useRef, useState} from "react";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import {ToastContainer, toast} from "react-toastify";
import { Link } from "react-router-dom";
 
function ManageProducts() {
 
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
 
  useEffect(() => {
    fetch("http://localhost:8080/products")
        .then(res=>res.json())
        .then(json=> setProducts(json))
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/categories")
        .then(res=>res.json())
        .then(json=> setCategories(json))
  }, []);
 
  const deleteProduct = (id: number) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
    }).then(() => 
      setProducts(products.filter(product => product.id !== id)));
    ;
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const addProduct = () => {
    const newProduct = {
      name: nameRef.current?.value,
      price: Number(priceRef.current?.value),
      image: imageRef.current?.value,
      active: activeRef.current?.checked,
      category: {"id": Number(categoryRef.current?.value)},
    }

    fetch(`http://localhost:8080/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>res.json())
      .then(json=> {
        if(
          json.message === undefined && 
          json.timestamp === undefined && 
          json.status === undefined
        ) {
          setProducts(json);
          toast.success("New product added!")
        } else {
          
          toast.error("Error :(\n" + json.message);
          //alert(json.message);
        }
        
      })
    ;
  }
 
  return (
    <div>
      <h2>/ Manage Products /</h2>
      <br />
      <div>
        <label>name</label> <br />
        <input ref={nameRef} type="text" placeholder="name goes here" /> <br />
        <label>price</label> <br />
        <input ref={priceRef} type="number" placeholder="0"/> <br />
        <label>image</label> <br />
        <input ref={imageRef} type="text" /> <br />
        <label>active</label> <br />
        <input ref={activeRef} type="checkbox" /> <br />
        <label>category</label> <br />
        {/*<input ref={categoryRef} type="number" placeholder="0" /> <br />*/}
        <select ref={categoryRef}>
          {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
        <br />
        <br />
        <button onClick = {() => addProduct()}>Add product</button>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={product.name} width="50" height="50" />
              </td>
              <td>{product.category?.name}</td>
              <td>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
              <td>
                <Link to={"/manage/edit-product/" + product.id}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}
 
export default ManageProducts;