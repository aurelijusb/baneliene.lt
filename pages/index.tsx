import { Presentation } from "@/data/load";
import { client } from "@/lib/sanity.client";
import { Home, query } from "@/components/Home";

export default function Index({
  presentations,
}: {
  presentations: Presentation[];
}) {
  return <Home presentations={presentations}></Home>;
}

export async function getStaticProps() {
  return {
    props: {
      presentations: await client.fetch(query),
    },
  };
}
