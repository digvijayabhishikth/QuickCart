import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1"

export const getProducts = async ()=>{
    const url = `${baseUrl}/products`;
    try{
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err;
    }
}