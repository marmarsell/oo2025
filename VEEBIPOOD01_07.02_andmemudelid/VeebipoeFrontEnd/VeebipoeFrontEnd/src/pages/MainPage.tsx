import { useCallback, useEffect, useRef, useState } from 'react'
import { Category } from '../models/Category';
import { Product } from '../models/Product';

function MainPage() {

    //muutuja - html     muudab muutujat, plus HTMLi (sulgude sees on algväärtus)
  const [kategooriad, setKategooriad] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [productsByPage, setProductByPage] = useState(1);
  const [page, setPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(-1);

  //uef -> onload
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then(res => res.json())              // kogu tagastus
      .then(json => setKategooriad(json))   // body:sisu
  }, []);

  

  const showByCategory = useCallback((categoryId: number, currentPage: number) => {
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
        setTotalPages(json.totalPages);
      })   // body:sisu
  }, [productsByPage])

  useEffect(() => {
    showByCategory(-1, 0);
  }, [showByCategory]);

  function updatePage(newPage: number) {
    
    showByCategory(activeCategory, newPage); //TODO: aktiivne kategooria
  }

  const productsByPageRef = useRef<HTMLSelectElement>(null); //HTMLi imputiga sidumiseks
  
  return (
    <div>
        <h2>/ MAIN PAGE /</h2> show per page: 
        <select ref={productsByPageRef} onChange={() => setProductByPage(Number(productsByPageRef.current?.value))}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div>
          <button key={-1} onClick={() => showByCategory(-1, 0)}>
            kõik kategooriad
          </button>|
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
          <button disabled={page >= totalPages - 1}
            onClick={() => updatePage(page + 1)}>
            Järgmine
          </button>
        </div>
    </div>
  )
}

export default MainPage