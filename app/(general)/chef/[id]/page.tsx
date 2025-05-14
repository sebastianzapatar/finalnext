// app/(general)/chef/[id]/page.tsx
import { ChefDetail } from "@/app/components/chef/ChefDetail";
import { getDishesByChef } from "@/app/services/chefs/getDishesByChef";

type ChefDetailPageProps = {
  params: { id: string };
};


export default async function ChefDetailPage({ params }: ChefDetailPageProps) {
  const dishes = await getDishesByChef(params.id);
  return <ChefDetail dishes={dishes} />;
}
