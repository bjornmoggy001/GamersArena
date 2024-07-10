// app/page.js
import React from 'react';
import { client } from '../lib/client'; // Adjust the path as needed
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import './globals.css';

export default async function Home() {
  const productsQuery = '*[_type == "product" && !(_id in path("drafts.**")) ]';
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner" && !(_id in path("drafts.**"))] | order(_updatedAt desc)[-0]';
  const bannerData = await client.fetch(bannerQuery);

  return (
    <div>
      <HeroBanner heroBanner={bannerData ? bannerData : null} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Products of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData ? bannerData : null} />
    </div>
  );
}
