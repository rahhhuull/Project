import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "NovaWear - Trendy Accessories & Tees";
  }, []);

  return (
    <main className="bg-zinc-950 text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          NovaWear
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-zinc-400 max-w-xl"
        >
          Trendy accessories & bold prints for the new era. Wear the future.
        </motion.p>
      </section>

      <section className="px-6 py-16 bg-zinc-900" id="shop">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Moonlight Pendant", image: "/products/pendant.jpg" },
            { name: "Glitch Tee", image: "/products/tshirt.jpg" },
            { name: "Cyber Bracelet", image: "/products/bracelet.jpg" },
            { name: "Nova Chain", image: "/products/chain.jpg" },
            { name: "Digital Flame Tee", image: "/products/flame.jpg" },
            { name: "Orbit Ring", image: "/products/ring.jpg" },
          ].map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-medium text-white text-center">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-950 text-center border-t border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Us</h2>
        <p className="text-zinc-400 text-lg">Have questions or collab ideas?</p>
        <p className="text-white text-xl mt-4">Email: <a href="mailto:novawear@gmail.com" className="text-blue-400 hover:underline">novawear@gmail.com</a></p>
      </section>
    </main>
  );
}
