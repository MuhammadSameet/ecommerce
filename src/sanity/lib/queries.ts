import { groq } from "next-sanity";


export const allProducts = groq `*[_type == "product"]`
export const fourCard = groq `*[_type == "product"][0..3]`
export const downdrop = groq `*[_type == "category"]`
