import axios from 'axios'

export const getData = async () => {
    try {
        const url = `https://fakestoreapi.com/products`;
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
    }
}