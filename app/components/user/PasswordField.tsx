import { FormField, 
    FormItem,
    FormLabel, 
    FormControl,
    FormMessage
   } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
interface PasswordFormValues {
  password: string;
}
  export const PasswordField = ({control}:{control:Control<PasswordFormValues>}) => {
    return (
      <FormField
      control={control}
      name="password"
      render={({field})=>(
        <FormItem>
          <FormLabel>
            Email
          </FormLabel>
          <FormControl>
            <Input type="password" placeholder="Contraseña"
            {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}>
  
      </FormField>
    )
  }