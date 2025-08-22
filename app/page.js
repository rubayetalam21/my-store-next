export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
          Discover Premium Products
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
          Quality you can trust, curated just for you. Shop electronics, furniture, and lifestyle products.
        </p>
        <a
          href="/products"
          className="mt-8 inline-block bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          Shop Now
        </a>
      </section>

      {/* Highlights Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your products delivered quickly with reliable shipping options.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <div className="text-4xl mb-4">💳</div>
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">
            Pay with confidence using our safe and encrypted payment gateways.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">
            We curate products from trusted brands ensuring top-notch quality.
          </p>
        </div>
      </section>

      {/* Optional Call-to-Action Section */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Shopping Today</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Browse our extensive catalog of electronics, office essentials, and lifestyle products tailored for your life.
        </p>
        <a
          href="/products"
          className="inline-block bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-600 transition"
        >
          Explore Products
        </a>
      </section>

    </main>
  );
}
