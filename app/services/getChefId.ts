import axios from 'axios';
export interface Dish{
    id:string;
    name:string;
    price:number;
    description:string;
    image:string;
}
export interface Chef{
    id:string;
    name:string;
    skill:string;
    dishes:Dish[];
}
const baseURL=process.env.NEXT_PUBLIC_API_URL;
export const getChefById=async (id:string):Promise<Chef>=>{
    try{
        const response=await axios.get(baseURL+"/chef/"+id);
        return response.data;
    }catch(error){
        throw new Error("Chef not found");
    }
}