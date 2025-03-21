import { useEffect, useState } from 'react'
import { Category } from '../models/Category';
import { Product } from '../models/Product';

function MainPage() {

    //muutuja - html     muudab muutujat, plus HTMLi (sulgude sees on algväärtus)
  const [kategooriad, setKategooriad] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  //uef -> onload
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => res.json())              // kogu tagastus
      .then(json => setKategooriad(json))   // body:sisu
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())              // kogu tagastus
      .then(json => setProducts(json))   // body:sisu
  }, []);

  return (
    <div>
        MAIN PAGE
        <div>
          {kategooriad.map(kategooria =>
          <div key ={kategooria.id}>
           {"id:" + kategooria.id + " " + kategooria.name + " " + kategooria.active}
          </div> )}
        </div>
        <br />
        <div>
          {products.map(product =>
          <div key ={product.id}>
           {/*"id:" + product.id + " " + product.name + " price: " + product.price + " " + product.category + " " + product.active*/}
           {"id:"} {product.id} {"|"} {product.name} {product.price} {product.active}
          </div> )}
        </div>
    </div>
  )
}

export default MainPage