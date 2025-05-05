import { getChef } from "@/app/services/getChef"
import { CardContent,Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export const ChefList = async() => {
    const chefs=await getChef();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {chefs.map((chef)=>(
            <Card key={chef.id} className="p-4"> 
                <CardContent className="space-y-2">
                    <h2 className="text-lg font-bold">{chef.name}</h2>
                    <p className="text-gray-600">Skill {chef.skill}</p>
                    <Link href={`/chefs/${chef.id}`}>
                        <Button>
                            Ver detalles
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}
