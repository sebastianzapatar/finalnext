'use client'
import {z} from 'zod'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { EmailField } from "../EmailField";
import { PasswordField } from "../PasswordField";
import Cookies from "js-cookie";
import { loginSchema } from "@/app/schemas/loginSchema";
import { useAuthStore } from "@/app/lib/auth-store";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
type LoginFormValues=z.infer<typeof loginSchema>
export const Login = () => {
    const form=useForm<LoginFormValues>({
        resolver:zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })
    const router=useRouter();
    const setAuthencicated=useAuthStore((state)=>state.setAuthenticated)
    const onSubmit=async(data:LoginFormValues)=>{
        try{
            const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/dictator/login`,
                data);
            const token=res.data.token;
            Cookies.set("token",token,{
                path:"/",
                secret:true,
                sameSite:"strict"
            })
            setAuthencicated(true,token)
            alert("Bienvendio mi perro")
            router.push("/")
        }catch(error){
            alert("no entro 😢")
            console.error(error);
        }
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className='space-y4 max-w-md mx-auto'>
            <EmailField control={form.control}/>
            <PasswordField control={form.control}/>
            <Button type="submit">Iniciar sesión</Button>
        </form>
    </Form>
  )
}
