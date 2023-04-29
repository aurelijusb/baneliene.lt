import Home, { query } from "@/components/Home";
import { useState } from "react";
import { Presentation } from "../../data/load";
import { SanityPreview } from "../../lib/SanityPreview";
import { DynamicToken } from "./DynamicToken";

export default function Preview() {
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [token, setToken] = useState<string | null>(null);

  return (
    <DynamicToken placeholder="Loading..." setToken={setToken}>
      <SanityPreview setData={setPresentations} query={query} token={token}>
        <Home presentations={presentations}></Home>
      </SanityPreview>
    </DynamicToken>
  );
}
