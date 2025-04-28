import axios from "axios";

const baseUrl = "https://dummyjson.com"

export const getProducts = async ()=>{
    const url = `${baseUrl}/products`;
    try{
        const response = await axios.get(url);
        return response.data.products;
    }catch(err){
        console.log(err);
        return err;
    }
}