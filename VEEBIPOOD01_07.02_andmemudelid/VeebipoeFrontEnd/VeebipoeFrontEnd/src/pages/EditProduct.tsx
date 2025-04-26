import { useEffect, useRef, useState } from "react"
import { Category } from "../models/Category";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../models/Product";

function EditProduct() {
    const {productId} = useParams();
    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const activeRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);
    const [categories, setCategories] = useState<Category>();
    const [product, setProduct] = useState<Product>();
    const navigate = useNavigate();

    //uef
    useEffect(() => {
        fetch("http://localhost:8080/products/" + productId)
            .then(res => res.json())
            .then(json => setProduct(json));
    }, [productId]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then(res=>res.json())
            .then(json=> setCategories(json))
    }, []);

    const editProduct = () => {
        const modifiedProduct = {
            id: productId,
            name: nameRef.current?.value,
            price: Number(priceRef.current?.value),
            image: imageRef.current?.value,
            active: activeRef.current?.checked,
            category: {"id": Number(categoryRef.current?.value)},
        };
        fetch("http://localhost:8080/products", {
            method:"PUT",
            body: JSON.stringify(modifiedProduct),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => {
            if(json.message && json.timestamp && json.status) {
                alert(json.message);
            } else {
                navigate("/manage/products");
            }
        });

    };

    if (product === undefined) {
        return <div>Product not found</div>
    }

  return (
    <div>
        <label>name</label> <br />
        <input ref={nameRef} type="text" defaultValue={product.name} /> <br />
        <label>price</label> <br />
        <input ref={priceRef} type="number" defaultValue={product.price} /> <br />
        <label>image</label> <br />
        <input ref={imageRef} type="text" defaultValue={product.image} /> <br />
        <label>active</label> <br />
        <input ref={activeRef} type="checkbox" defaultChecked={product.active}/> <br />
        <label>category</label> <br />
        <select ref={categoryRef}>
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
        <br />
        <button onClick={() => {editProduct()}}>Save Changes</button>
    </div>
  )
}

export default EditProduct