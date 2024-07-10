// app/product/[slug].js
import React from 'react';
import { notFound } from 'next/navigation';
import { client, urlFor } from '../../lib/client'; // Adjust the path if necessary

export default async function ProductDetails({ params }) {
  const { slug } = params;
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(product.image && product.image[0]).url()} alt={product.name} />
          </div>
        </div>
        <div className='product-details'>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
