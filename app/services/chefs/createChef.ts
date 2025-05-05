import axios from "axios";
import { ChefFormValues } from "../../schemas/ChefFormSchema";
const baseURL=process.env.NEXT_PUBLIC_API_URL;
export async function createChef(data:ChefFormValues):Promise<ChefFormValues>{
    const response=await axios.post(baseURL+"/chef",data);
    return response.data;
}