"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import AllProducts from "./allproducts";
import Poster from "./poster";
import ProductTop from "./productTop";
import Filter from "./Filter";


const ProductCategory = () => {
  
     const images = [
    {
      src: '/categoryimg/shoe1.png',
      alt: 'Banner 1',
    },
    {
      src: '/categoryimg/shoe1.png',
      alt: 'Banner 2',
    },
    {
      src: '/categoryimg/shoe1.png',
      alt: 'Banner 3',
    },
    {
      src: '/categoryimg/shoe1.png',
      alt: 'Banner 4',
    },
  ];
   
  return (
     <>
    
    {/* POSTER */}
      <div>
        <Poster></Poster>
      </div>


{/* Filter */}

<div>
<Filter></Filter>
</div>

      {/* Product TOP */}

<div>
<ProductTop></ProductTop>
</div>

     


       <div>
              <AllProducts></AllProducts>
          </div>
       
   

   </>
  );
};

export default ProductCategory;
