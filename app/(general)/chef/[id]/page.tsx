import { ChefDetail } from "@/app/components/chef/ChefDetail";


type Props = {
  params: {
    id: string;
  };
};

export default function ChefDetailPage({ params }: Props) {
  return <ChefDetail id={params.id} />;
}
