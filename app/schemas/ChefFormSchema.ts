import {z} from 'zod';
export const ChefSchema =z.object({
    name:z.string().min(2,"Name required"),
    skill:z.string().min(2,"Skill required")
})
export type ChefFormValues=z.infer<typeof ChefSchema>