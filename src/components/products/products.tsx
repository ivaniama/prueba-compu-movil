export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating:{
        rate: number;
        count: number;
    }
}

const style = {
    listStyleType: 'none'
}

export const ProductList = ({products} : {products: Products[]}) => {
    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map( (product) => (
                    <li key={product.id} style={style}>
                        <p>{product.title}</p>
                        <h2> <strong>${product.price}</strong></h2>
                        <hr></hr>
                    </li>
                ))} 
            </ul>
      </div>
    );
}