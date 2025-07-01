import products from "../Category/products.json";

export default function AllProducts() {
  return (
    <>
    <div className="px-4 py-6 md:px-8 lg:px-16">
      <h1 className="text-3xl text-start mb-8">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            {/* Like Icon */}
            <div className="flex justify-end">
              <img
                src="/categoryimg/heart.svg" // replace with your icon path
                alt="Like"
                className="w-6 h-6 cursor-pointer"
              />
            </div>

            {/* Image */}
            <div className="w-full aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Name */}
            <h2 className="text-sm font-semibold mb-1">{product.name}</h2>

            {/* Description */}
            <p className="text-xs text-gray-600 mb-2">{product.description}</p>

            {/* Ratings */}
            <div className="text-yellow-500 text-sm mb-2">
              {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              <span className="text-gray-500 ml-1">({product.rating})</span>
            </div>

            {/* Price Info */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 font-bold text-lg">{product.price}</span>
              <span className="line-through text-sm text-gray-500">{product.mrp}</span>
              <span className="text-green-600 text-xs">{product.offer}</span>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex gap-2">
              <button className="w-1/2 bg-blue-600 text-white text-xs py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="w-1/2 bg-green-600 text-white text-xs py-2 rounded-md hover:bg-green-700">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    </>
  );
}
