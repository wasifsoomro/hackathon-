// components/TopSelling.tsx
export default function TopSelling() {
    const products = [
      { id: 1, name: 'Orange T-shirt', price: '$25', image: '/image 7 (1).png' },
      { id: 2, name: 'Black Jeans', price: '$50', image: '/image 8 (1).png' },
      { id: 3, name: 'Black Jeans', price: '$50', image: '/image 9.png' },
      { id: 4, name: 'Black Jeans', price: '$50', image: '/image 10 (1).png' },
    ];
  
    return (
      <section className="py-16 flex flex-col lg:flex-row items-center justify-center">
        <h2 className="text-center text-3xl font-bold mb-6">Top Selling</h2>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded ">
              <img src={product.image} alt={product.name} className="mb-4 rounded-lg h-72 w-72 object-cover" />
              <h3 className="font-bold">{product.name}</h3>
              <img src="Frame 35.png" alt="review" />
              <p className="font-bold">{product.price}</p>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="flex items-center justify-center mt-6">
          <button className="px-16 lg:px-10 py-2 border border-gray-500 rounded-lg text-gray-700 hover:bg-gray-100">
            View All
          </button>
        </div>
      </section>
    );
  }
  