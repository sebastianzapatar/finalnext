import { UseFormReturn } from "react-hook-form";
import { ChefFormValues } from "@/app/schemas/ChefFormSchema";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";
export default function 
ChefFormFields({form}:{form:UseFormReturn<ChefFormValues>}){
    return(
        <>
            <FormField
            control={form.control}
            name="name"
            render={({field})=>(
                <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                        <input type="Chef name" {...field} />
                    </FormControl>
                </FormItem>
            )}>
            
            </FormField>
            <FormField
            control={form.control}
            name="skill"
            render={({field})=>(
                <FormItem>
                    <FormLabel>Skill</FormLabel>
                    <FormControl>
                    <input type="Chef skill" {...field} />
                    </FormControl>
                </FormItem>
            )}>
            
            </FormField>
        </>
    )
}
