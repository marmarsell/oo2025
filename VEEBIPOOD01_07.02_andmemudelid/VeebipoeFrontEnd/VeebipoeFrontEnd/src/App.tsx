
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import ManageProducts from './pages/ManageProducts';
import ManageCategories from './pages/ManageCategories';
import Array from './pages/Array';
import Menu from './components/Menu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';
import Map from './pages/Map';

function App() {
  //const [count, setCount] = useState(0)
  

  

  return (
    <>
      {/* <div>{7 + 7}</div>
      <div>7 + 7</div>
      <div>{kogus}</div>
      <div>{count}</div> */}
        <Menu />
        


        {/*localhost:5173  --->  <div>MainPage</div>*/}
        <Routes>
          <Route path="/" element={ <MainPage />} />
          <Route path="/arrays" element={ <Array />} />
          <Route path="/manage/products" element={ <ManageProducts />} />
          <Route path="/manage/categories" element={ <ManageCategories />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/orders" element={ <Orders/>} />

          <Route path="/product/:productId" element={ <SingleProduct/>} />
          <Route path="/manage/edit-product/:productId" element={ <EditProduct/>} />

          <Route path="/*" element={ <div id='error'><h1>Error 404</h1><h3>Page not found :(</h3></div>} />
          <Route path="/map" element={ <Map />} />

        </Routes>
    </>
  )
}

/* key={}
React soovib koodi mällu jätta */

export default App
