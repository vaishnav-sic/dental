"use client"
import React from 'react'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

import { MdAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import Image from 'next/image';
import Logo from "../../../public/logo.svg"
import { MdMenu } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const categoryData = [
  {
    name: "Pharmacy",
    subcategories: [
      { name: "Local Anesthesia", products: ["Spray A", "Spray B"] },
      { name: "Nasal Drops/Spray", products: ["Drop A", "Spray X"] }
    ]
  },
  {
    name: "Dental Brands",
    subcategories: [
      { name: "Brand A", products: ["Brush A", "Paste A"] },
      { name: "Brand B", products: ["Scaler B", "Mirror B"] }
    ]
  },
  {
    name: "Equipment",
    subcategories: [
      { name: "X-Ray Devices", products: ["Device A", "Device B"] }
    ]
  }
];


const brandTabs = ["new", "featured", "dentalkart"];

const brandData = {
  new: [
    { id: "brand1", name: "Brand One", logo: "https://picsum.photos/seed/brand1/200/200" },
    { id: "brand2", name: "Brand Two", logo: "https://picsum.photos/seed/brand2/200/200" },
    { id: "brand3", name: "Brand Three", logo: "https://picsum.photos/seed/brand3/200/200" },
    { id: "brand4", name: "Brand Four", logo: "https://picsum.photos/seed/brand4/200/200" },
    { id: "brand5", name: "Brand Five", logo: "https://picsum.photos/seed/brand5/200/200" }
  ],
  featured: [
    { id: "brand6", name: "Brand Six", logo: "https://picsum.photos/seed/brand6/200/200" },
    { id: "brand7", name: "Brand Seven", logo: "https://picsum.photos/seed/brand7/200/200" },
    { id: "brand8", name: "Brand Eight", logo: "https://picsum.photos/seed/brand8/200/200" }
  ],
  dentalkart: [
    { id: "brand9", name: "Brand Nine", logo: "https://picsum.photos/seed/brand9/200/200" },
    { id: "brand10", name: "Brand Ten", logo: "https://picsum.photos/seed/brand10/200/200" },
    { id: "brand11", name: "Brand Eleven", logo: "https://picsum.photos/seed/brand11/200/200" }
  ]
};




const Navbar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandOpen, setBrandOpen] = useState(false);
const [activeBrandTab, setActiveBrandTab] = useState("new");


  const filteredCategories = categoryData
  .map((category) => {
    const matchedSubcategories = category.subcategories
      .map((sub) => {
        const matchedProducts = sub.products.filter((product) =>
          product.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const subMatches =
          sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || matchedProducts.length;

        return subMatches
          ? {
              ...sub,
              products: matchedProducts.length ? matchedProducts : sub.products
            }
          : null;
      })
      .filter(Boolean);

    const catMatches =
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) || matchedSubcategories.length;

    return catMatches ? { ...category, subcategories: matchedSubcategories } : null;
  })
  .filter(Boolean);

 

  return (
    <>
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex xl:flex justify-between items-center bg-white shadow-md">
        <div className="flex h-23 flex-col bg-white w-full relative z-40">
          {/* Top Row */}
          <div className="h-[60%] px-5 bg-white py-2 flex items-center">
            <div className="justify-center flex w-[50%]">
              <div className="w-[50%]">
                <Image className="text-black bg-black" src={Logo} alt="Logo" />
              </div>
              <div className="search-container border-1 w-[50%] border-gray-200 rounded flex items-center text-center justify-between px-1">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="outline-none w-[80%]"
                />
                <button className="w-[20%] flex items-center text-center justify-end cursor-pointer">
                  <CiSearch className="hover:scale-1.5" />
                </button>
              </div>
            </div>

            <div className="flex justify-evenly w-[50%]">
              <div className="flex items-center justify-center text-center gap-1 text-sm">
                <CiPhone />
                <h3>8767834050</h3>
              </div>
              <>|</>
              <div className="flex items-center justify-center text-center gap-1 text-sm">
                <MdOutlineMailOutline />
                <h3>sic@sic.com</h3>
              </div>
              <>|</>
              <div className="flex items-center justify-center text-center gap-1 text-sm">
                <CiCircleInfo className="text-lg" />
                <h3>info</h3>
                <IoIosArrowDown />
              </div>
              <>|</>
              <div className="flex items-center justify-center text-center gap-1 text-sm">
                <MdAccountCircle className="text-lg" />
                <IoIosArrowDown />
              </div>
              <>|</>
              <div className="flex items-center justify-center text-center gap-1 text-lg">
                <CiHeart />
              </div>
              <>|</>
              <div className="flex items-center justify-center text-center gap-1 text-lg">
                <SlHandbag />
              </div>
            </div>
          </div>

{/* Bottom Navbar */}
<div className="h-[40%] w-full bg-gray-100 items-center gap-5 justify-center flex relative">
  <div
    className="flex items-center justify-center text-center gap-1 text-sm font-semibold cursor-pointer"
    onClick={() => {
      setCategoryOpen(!categoryOpen);
      setBrandOpen(false);
    }}
  >
    <h1>Category</h1>
    {categoryOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </div>
  <div
    className="flex items-center justify-center text-center gap-1 text-sm font-semibold cursor-pointer"
    onClick={() => {
      setBrandOpen(!brandOpen);
      setCategoryOpen(false);
    }}
  >
    <h1>Brand</h1>
    {brandOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
  </div>
  <div className="flex items-center justify-center text-center gap-1 text-sm font-semibold">
    <h1>Buying Guide</h1>
    <IoIosArrowDown />
  </div>
  <div className="flex items-center justify-center text-center gap-1 text-sm font-semibold">
    <h1>Best Seller</h1>
    <IoIosArrowDown />
  </div>
  <div className="flex items-center justify-center text-center gap-1 text-sm font-semibold">
    <h1>Membership</h1>
    <IoIosArrowDown />
  </div>
  <div className="flex items-center justify-center text-center gap-1 text-sm font-semibold">
    <h1>Community</h1>
    <IoIosArrowDown />
  </div>
</div>

{brandOpen && (
  <div
    onMouseLeave={() => {
      setBrandOpen(false);
      setActiveBrandTab("new");
    }}
    className="absolute top-full left-[10vw] bg-white shadow-md mt-1 px-6 py-4 w-[80vw] z-50 rounded text-sm"
  >
    {/* Filter Tabs */}
    <div className="flex gap-6 mb-4">
      {brandTabs.map((tab) => (
        <button
          key={tab}
          className={`capitalize text-sm px-3 py-1 border-b-2 ${
            activeBrandTab === tab
              ? "border-blue-500 text-blue-600 font-medium"
              : "border-transparent text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveBrandTab(tab)}
        >
          {tab === "dentalkart" ? "Dentalkart Brands" : `${tab} Brands`}
        </button>
      ))}
      <button className="ml-auto text-blue-500 text-sm hover:underline">
        View All
      </button>
    </div>

    {/* Brand Logos Grid */}
    <div className="grid grid-cols-5 gap-4 max-h-[200px] overflow-y-auto">
      {brandData[activeBrandTab].map((brand, index) => (
        <div
          key={index}
          className="cursor-pointer rounded hover:shadow p-2 flex items-center justify-center"
          onClick={() => {
            // To be connected later: navigate to brand page
            console.log("Navigate to brand:", brand.name);
          }}
        >
          {/* Placeholder for logo — replace with <Image /> later */}
         <div className="w-[80px] h-[80px] rounded overflow-hidden">
  <Image
    src={brand.logo}
    alt={brand.name}
    width={80}
    height={80}
    className="w-full h-full object-fill"
  />
</div>

        </div>
      ))}
    </div>
  </div>
)}


{/* Category Dropdown */}
{categoryOpen && (
  <div
    onMouseLeave={() => {
      setCategoryOpen(false);
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setSearchQuery("");
    }}
    className="absolute top-full left-[10vw] bg-white shadow-md mt-1 px-8 py-4 w-[80vw] flex z-50 border text-sm"
  >
    {/* Categories Column */}
    <div className="w-1/3 pr-4 border-r max-h-[300px] overflow-y-auto">
      <h3 className="font-bold text-sm mb-2 sticky top-0 bg-white">Categories</h3>
      <input
        type="text"
        placeholder="Search Category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3 w-full px-2 py-1 border border-gray-300 rounded text-sm"
      />
      {filteredCategories.map((cat, i) => (
        <div
          key={i}
          className={`cursor-pointer py-1 px-2 ${
            selectedCategory === i ? "bg-gray-100 font-semibold" : ""
          }`}
          onMouseEnter={() => {
            setSelectedCategory(i);
            setSelectedSubcategory(null);
          }}
        >
          {cat.name}
        </div>
      ))}
    </div>

    {/* Subcategories Column */}
    <div className="w-1/3 px-4 border-r max-h-[300px] overflow-y-auto">
      <h3 className="font-bold text-sm mb-2 sticky top-0 bg-white">Subcategories</h3>
      {selectedCategory !== null &&
        filteredCategories[selectedCategory]?.subcategories.map((sub, j) => (
          <div
            key={j}
            className={`cursor-pointer py-1 px-2 ${
              selectedSubcategory === j ? "bg-gray-100 font-medium" : ""
            }`}
            onMouseEnter={() => setSelectedSubcategory(j)}
          >
            {sub.name}
          </div>
        ))}
    </div>

    {/* Products Column */}
    <div className="w-1/3 pl-4 max-h-[300px] overflow-y-auto">
      {selectedCategory !== null &&
        selectedSubcategory !== null &&
        filteredCategories[selectedCategory]?.subcategories[selectedSubcategory]?.products.length > 0 && (
          <>
            <h3 className="font-bold text-sm mb-2 sticky top-0 bg-white">
              {filteredCategories[selectedCategory].name} /{" "}
              {filteredCategories[selectedCategory].subcategories[selectedSubcategory].name}
            </h3>
            {filteredCategories[selectedCategory].subcategories[selectedSubcategory].products.map(
              (prod, k) => (
                <div key={k} className="py-1 px-2 text-gray-700 hover:text-black">
                  {prod}
                </div>
              )
            )}
          </>
        )}
    </div>
  </div>
)}
        </div>
      </div>

                {/* Tablet Navbar */}
                <div className="hidden md:flex lg:hidden justify-between items-center">
                    {/* Tablet-specific content */}
                    <div className="w-full inline-flex flex-col justify-start items-start">
                        <div className="self-stretch bg-[#010101] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center overflow-hidden">
                            <div className="self-stretch px-6 bg-Colors-Token-Text-CONTRAST inline-flex justify-between items-center">
                                <div className="px-3 py-4 rounded-md   border-stone-900 flex justify-center items-center gap-1.5">
                                    <div data-filled="false" className=" relative">
                                        <MdMenu className='text-white w-6 h-6' />
                                    </div>
                                </div>

                                <Image className='w-24'
                                    src={Logo} />


                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="false" data-size="Big" data-state="Default" data-style="Plain" className="px-3 py-4 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)] border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center gap-1.5">
                                    <div className="w-6 h-6 relative overflow-hidden">
                                        <CiPhone className='text-white h-6 w-6' />

                                    </div>
                                </div>

                                <h2 className='text-white'>|</h2>

                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="false" data-size="Big" data-state="Default" data-style="Plain" className="px-3 py-4 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)] border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center gap-1.5">
                                    <div className="w-6 h-6 relative overflow-hidden">
                                        <CiHeart className='text-white h-6 w-6' />
                                    </div>
                                </div>

                                <h2 className='text-white'>|</h2>

                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="false" data-size="Big" data-state="Default" data-style="Plain" className="px-3 py-4 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)] border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center gap-1.5">
                                    <div className="w-6 h-6 relative overflow-hidden">
                                        <MdAccountCircle className='text-white h-6 w-6' />
                                    </div>
                                </div>

                                <h2 className='text-white'>|</h2>

                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="false" data-size="Big" data-state="Default" data-style="Plain" className="px-3 py-4 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)] border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center gap-1.5">
                                    <div className="w-6 h-6 relative overflow-hidden">
                                        <SlHandbag className='text-white h-5 w-5' />
                                    </div>
                                </div>





                            </div>




                            <div className="self-stretch px-6 py-3 bg-white inline-flex justify-start items-center gap-6">
                                <div data-show-cursor="true" data-show-header="false" data-show-label="true" data-show-left="false" data-show-message="false" data-show-right="true" data-show-tooltip="true" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                                    <div className="self-stretch h-12 p-3 bg-Colors-Token-Backgorund-Base outline outline-1 outline-offset-[-1px] outline-Colors-Primitive-Secondary-1000 inline-flex justify-start items-center gap-2">
                                        <input type='text' placeholder='Search for products' className="flex-1 justify-center text-Colors-Token-Text-CONTRAST-2 text-xs outline-none leading-none"></input>
                                        <a data-filled="false" className="w-5 h-5 relative">
                                            <div className="w-4 h-4 left-[1.67px] top-[1.67px] absolute  outline-offset-[-0.75px] outline-Colors-Token-Icon-Default" />
                                            <CiSearch className=" absolute  text-[#B0B0B0] h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="self-stretch px-6 bg-white inline-flex justify-center items-center text-center">
                                <div className="self-stretch px-3 py-1 rounded  border-Colors-Token-Text-CONTRAST flex justify-center items-center gap-2 text-center">
                                    <TbTruckDelivery className='h-5' />
                                    <div className="text-center justify-center"><span class="text-Colors-Token-Text-CONTRAST text-sm font-normal font-['Proxima_Nova'] leading-normal">Spend $150 or more and get </span><span class="text-Colors-Token-Text-CONTRAST text-sm font-normal font-['Proxima_Nova'] underline leading-normal">FREE SHIPPING</span><span class="text-Colors-Token-Text-CONTRAST text-sm font-normal font-['Proxima_Nova'] leading-normal"> on your order!</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="flex md:hidden justify-between items-center">
                    {/* Mobile-specific content */}
                    <div className="w-full inline-flex flex-col justify-start items-start">
                        <div className="self-stretch bg-[#010101] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center overflow-hidden">
                            <div className="self-stretch px-4 bg-Colors-Token-Text-CONTRAST inline-flex justify-between items-center">
                                <div className="pr-3 py-3 rounded-md  border-stone-900 flex justify-center items-center gap-2">
                                    <div data-filled="false" className="w-6 h-6 relative">
                                        <MdMenu className='w-6 h-6 text-white' />
                                    </div>
                                </div>
                                <Image className='w-20'
                                    src={Logo} />
                                <div data-allignment="None" data-button="No" data-orientation="Vertical" data-stroke="Default" data-title="No" className="h-6 flex justify-start items-start gap-2.5">
                                    <div className="w-px self-stretch bg-Colors-Primitive-Neutral-400 rounded-sm" />
                                </div>

                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="false" data-size="Big" data-state="Default" data-style="Plain" className="self-stretch px-3  py-2 rounded-md  border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center gap-2">
                                    <CiPhone className='w-6 h-6 text-white' />
                                </div>

                                <h2 className='text-white'>|</h2>


                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="true" data-size="Big" data-state="Default" data-style="Plain" className="p-3 rounded border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center ">
                                    <div className="w-6 h-6 relative overflow-hidden">
                                        <CiHeart className='text-white w-6 h-6' />
                                    </div>
                                </div>

                                <h2 className='text-white'>|</h2>

                                <div data-icon-only="True" data-label="true" data-left-icon="true" data-right-icon="true" data-size="Big" data-state="Default" data-style="Plain" className="p-3 rounded border-Colors-Token-Text-CONTRAST-5 flex justify-center items-center ">
                                    <div className="w-6 h-6 relative overflow-hidden">

                                        <SlHandbag className='w-5 h-5 text-white' />
                                    </div>
                                </div>

                            </div>
                            <div className="self-stretch px-4 py-3 bg-white inline-flex justify-start items-center gap-6">
                                <div data-show-cursor="true" data-show-header="false" data-show-label="true" data-show-left="false" data-show-message="false" data-show-right="true" data-show-tooltip="true" data-state="Default" className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                                    <div className="self-stretch h-12 p-3 bg-Colors-Token-Backgorund-Base  outline-offset-[-1px] outline-Colors-Primitive-Secondary-1000 inline-flex justify-start items-center gap-2">
                                        <input type='text' placeholder='Search for products' className="flex-1 justify-center text-Colors-Token-Text-CONTRAST-2 text-xs outline-none leading-none"></input>
                                        <a data-filled="false" className="w-5 h-5 relative">
                                            <div className="w-4 h-4 left-[1.67px] top-[1.67px] absolute  outline-offset-[-0.75px] outline-Colors-Token-Icon-Default" />
                                            <CiSearch className=" absolute  text-[#B0B0B0] h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Navbar