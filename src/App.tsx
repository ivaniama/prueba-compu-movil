import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [product, setProduct] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  interface Products {
    id: number;
    title: string;
    price: Float32Array;
    description: string;
    category: string;
    image: string;
    rating:{
        rate: Float32Array;
        count: number;
    }
  }

  const productList = (prod: Products) => {
    return (
        <div>
            <h4>Titulo: {prod.title}</h4>
            <h2>Precio: {prod.price}</h2>
      </div>
    );
  }

  const getData = async () => {
    try {
        const url = `https://fakestoreapi.com/products`;
        const response = await axios.get(url);
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
    } catch (error) {
        console.log("Error:", error);
    }
  }

  useEffect ( () => {
    getData();
  }, []);

  return (
    <>
    {loading?(
      <h1>Cargando datos...</h1>
    ):(
      {}
      )}
    </>
  )
}

export default App
