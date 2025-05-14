import { ChefDetail } from "@/app/components/chef/ChefDetail";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export default function ChefDetailPage({ params }: Props) {
  return <ChefDetail id={params.id} />;
}
