import axios from 'axios';
import { Dish } from '../chefs/getChefId';
const baseURL=process.env.NEXT_PUBLIC_API_URL;

export const getDish=async():Promise<Dish[]>=>{
        try{
            const response=await axios.get(baseURL+"/manuelacancele");
            return response.data;
        }catch(error){
            throw new Error("Error al obtener de los platos, Manuela Cancele");
        }
}