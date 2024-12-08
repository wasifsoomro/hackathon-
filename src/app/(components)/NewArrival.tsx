// components/NewArrivals.tsx
export default function NewArrivals() {
    const products = [
      { id: 1, name: 'T-shirt With Tape Details', price: '$20', image: '/image 7.png' },
      { id: 2, name: 'Skinny Fit Jeans', price: '$40', image: '/image 8.png' },
      { id: 3, name: 'CHECKERED SHIRT', price: '$40', image: '/image 9 (1).png' },
      { id: 4, name: 'SLEEVE STRIPED T-SHIRT', price: '$40', image: '/image 10.png' },
      // Add more products here
    ];
  
    return (
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 rounded">
              <img src={product.image} alt={product.name} className="mb-4 rounded-lg h-72 object-cover" />
              <h3 className="font-extrabold">{product.name}</h3>
              <img src="Frame 35.png" alt="review" />
              <p className="font-bold">{product.price}</p>
            </div>
          ))}
        </div>
          <div className="flex items-center justify-center">
          <button className="mt-2 px-16 lg:px-10  py-2 border border-gray-500 rounded-lg text-gray-700 hover:bg-gray-100">
                View All
              </button>
          </div>

      </section>
    );
  }
  