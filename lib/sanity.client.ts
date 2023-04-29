import { createClient } from "next-sanity";
import sanityConfig from "../sanity.json";

export const projectId = sanityConfig.api.projectId;
export const dataset = sanityConfig.api.dataset;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2022-03-25",
  useCdn: false,
});
