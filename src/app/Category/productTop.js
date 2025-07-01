import { useState } from 'react';

const ProductTop = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const sizes = ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'];
  const colorOptions = [
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-green-500' },
  ];

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  return (
    <div className="flex flex-col items-start self-stretch mb-12 gap-6 px-4 md:px-8 lg:px-12">
    

      {/* Results Count */}
      <span className="text-gray-700 text-lg md:text-2xl">
        Showing 1–30 of 65 results
      </span>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {/* Product Card */}
        <div className="flex flex-col items-start self-stretch border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          {/* Product Image with Badge */}
          <div className="relative w-full aspect-square bg-gray-100">
            <div className="absolute top-2 left-2 bg-gray-300 py-1 px-2 rounded">
              <span className="text-black text-xs font-bold">SALE!</span>
            </div>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/8gjlaoxh_expires_30_days.png"
              className="w-full h-full object-cover"
              alt="Brooks Ghost 15"
            />
            <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/zupq4vwv_expires_30_days.png"
                className="w-5 h-5 object-fill"
                alt="wishlist"
              />
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-start self-stretch p-4 gap-3">
            <h3 className="text-gray-800 text-lg font-bold">BROOKS GHOST 15</h3>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/k5epz8cp_expires_30_days.png"
                className="w-20 h-4 object-fill"
                alt="rating"
              />
              <span className="text-gray-700 text-sm">4.9 (15 reviews)</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm line-through">$772.00</span>
              <span className="text-black text-lg font-bold">$299.00</span>
            </div>
            
            {/* Color Options */}
            <div className="flex items-center gap-2">
              {colorOptions.map((color) => (
                <div
                  key={color.id}
                  className={`w-8 h-8 rounded-full ${color.color} border-2 border-transparent hover:border-black cursor-pointer`}
                />
              ))}
              <span className="text-gray-500 text-sm font-bold">+3 Style</span>
            </div>
            
            {/* Specification */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-sm font-bold">Specification:</span>
              <span className="text-gray-700 text-sm font-bold">Running, Engineered mesh</span>
            </div>
            
            {/* Size Selector */}
            <div className="w-full mt-2">
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-1 text-sm border rounded-md ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-500'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 py-2 px-4 rounded-md font-medium ${!selectedSize ? 'bg-gray-300 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'} transition-colors`}
              >
                {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
            
            {/* Buy Now Button */}
            <button
              disabled={!selectedSize}
              className={`w-full py-2 px-4 mt-2 border border-black rounded-md font-medium ${!selectedSize ? 'text-gray-400 border-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-50'} transition-colors`}
            >
              Buy Now
            </button>
          </div>
        </div>
        
        {/* Additional product cards would go here */}
      </div>
    </div>
  );
};

export default ProductTop;