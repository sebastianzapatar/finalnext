import {z} from 'zod';
export const loginSchema =z.object({
    email:z.string().email("No email direction"),
    password:z.string().min(12,"A least 12 characters")
})