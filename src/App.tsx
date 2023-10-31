import { useEffect, useState } from 'react'
import { getData } from './services/service';
import { Products, ProductList } from './components/products/products';
import { Loading } from './components/loading/loading';
import { Error } from './components/error/error'
import './App.css'

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [changeOrder, setChangeOrder] = useState (false);

  useEffect ( () => {
    async function fetchData() {
      try {
        const data = await getData();
        const defaultOrder = [...data].sort((a,b) => a.price - b.price);
        setProducts(defaultOrder);
        setLoading(false);
      } catch (error){
        console.log(error); 
        setError(true);
        setLoading(false);
      }   
    }
    fetchData();
  }, []);

  const byOrder = () => {
    setChangeOrder(!changeOrder);

    const order = [...products].sort((a,b) => {
      return changeOrder? a.price - b.price : b.price - a.price;
    });

    setProducts(order);
  }

  return (
    <>
    {loading?(
      <Loading />
    ): error ? (
      <Error />
    ):(
      <div>
        <button onClick={byOrder}>Cambiar orden</button>
        <ProductList products={products} />
      </div>
      )}
    </>
  )
}

export default App
