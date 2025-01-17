import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 export const client = createClient({
    projectId: '3wlycuua',
    dataset: 'production',
    apiVersion: '2023-06-14',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);