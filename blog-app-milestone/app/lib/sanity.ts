import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-03-07",  
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",        
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  
  useCdn: false,
});


const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
