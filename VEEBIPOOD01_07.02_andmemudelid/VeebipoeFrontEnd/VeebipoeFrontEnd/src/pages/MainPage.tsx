import { useEffect, useState } from 'react'
import { Category } from '../models/Category';
import { Product } from '../models/Product';

function MainPage() {

    //muutuja - html     muudab muutujat, plus HTMLi (sulgude sees on algväärtus)
  const [kategooriad, setKategooriad] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsByPage = 1;
  const [page, setPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(-1);

  //uef -> onload
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => res.json())              // kogu tagastus
      .then(json => setKategooriad(json))   // body:sisu
  }, []);

  useEffect(() => {
    showByCategory(-1, 0);
  }, []);

  function showByCategory(categoryId: number, currentPage: number) {
    setActiveCategory(categoryId);
    setPage(currentPage);
      fetch(
        "http://localhost:8080/category-products?categoryId=" +
        categoryId +
        "&size=" + productsByPage +
        "&page=" + currentPage
      )
      .then(res => res.json())              // kogu tagastus
      .then(json => {
        setProducts(json.content)
        setTotalProducts(json.totalElements);
      })   // body:sisu
  }

  function updatePage(newPage: number) {
    
    showByCategory(activeCategory, newPage); //TODO: aktiivne kategooria
  }
  
  return (
    <div>
        MAIN PAGE
        <div>
          <button key={-1} onClick={() => showByCategory(-1, 0)}>
            kõik kategooriad
          </button>
          {kategooriad.map(kategooria =>
          <button key={kategooria.id} onClick={() => showByCategory(kategooria.id, 0)}>
            {kategooria.name}
          </button>)}
        </div>
        <br />
        <div>
          <div>Kokku tooteid {totalProducts} tk</div>
          {products.map(product =>
          <div key ={product.id}>
           {/*"id:" + product.id + " " + product.name + " price: " + product.price + " " + product.category + " " + product.active*/}
           {"id:"} {product.id} {"|"} {product.name} {product.price} {product.active}
          </div> )}
          <button disabled={page === 0} onClick={() => updatePage(page - 1)}>Eelmine</button>
          <span> page: {page + 1} </span>
          <button disabled={page === Math.ceil(totalProducts / productsByPage - 1)}onClick={() => updatePage(page + 1)}>Järgmine</button>
        </div>
    </div>
  )
}

export default MainPage