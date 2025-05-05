import axios from 'axios';
import { Dish } from '@/app/schemas/dishes';
const baseURL=process.env.NEXT_PUBLIC_API_URL;
export const getDishesByChef=async(id:string):Promise<Dish[]>=>{
    try{
        const response=await axios.get(`${baseURL}/chef/${id}/dishes`);
        return response.data;
    }catch(error){
        throw new Error("Error al obtener los chefs, Manuela Cancele");
    }
}