import axios from 'axios';
import Chef from '../../schemas/Chef';
const baseURL=process.env.NEXT_PUBLIC_API_URL;

export const getChef=async():Promise<Chef[]>=>{
        try{
            const response=await axios.get(baseURL+"/chef");
            return response.data;
        }catch(error){
            throw new Error("Error al obtener los chefs, Manuela Cancele");
        }
}