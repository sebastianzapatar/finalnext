// app/(general)/chef/[id]/page.tsx
import { ChefDetail } from "@/app/components/chef/ChefDetail";
import { getDishesByChef } from "@/app/services/chefs/getDishesByChef";



export default async function ChefDetailPage({ params }: { params: { id: string } }) {
  const dishes = await getDishesByChef(params.id);
  return <ChefDetail dishes={dishes} />;
}