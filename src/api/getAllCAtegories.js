import axios from "axios";

const baseUrl = "https://api.escuelajs.co/api/v1"

export const getAllCategories = async ()=>{
    const url = `${baseUrl}/categories`;
    try{
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err;
    }
}