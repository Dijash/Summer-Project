import { motion } from "framer-motion";
import { Search, Star, Users, MapPin, ClipboardList } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-emerald-600">
          Nirmaan<span className="text-gray-900">Sathi</span>
        </h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-emerald-600 transition">
            Services
          </a>
          <a href="#about" className="hover:text-emerald-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="w-[100vw] h-screen flex flex-col justify-center items-center text-center px-6
                   bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-700
                   text-white relative overflow-hidden"
      >
        {/* Floating Background Shapes */}
        <motion.div
          className="absolute w-72 h-72 bg-white/10 rounded-full top-20 left-10 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-sky-300/20 rounded-full bottom-10 right-10 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 bg-emerald-300/20 rounded-full top-1/3 right-1/3 blur-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 relative z-10 drop-shadow-lg"
        >
          Dream. Design. Deliver.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl text-lg relative z-10 text-gray-100"
        >
          Your construction friend – connecting clients with verified architects
          & engineers across Nepal.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition relative z-10"
        >
          Get Started
        </motion.button>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-12 h-12 text-emerald-500" />,
              title: "Find Professionals",
              desc: "Search for architects, engineers, or teams by location, rating, and expertise.",
            },
            {
              icon: <Star className="w-12 h-12 text-yellow-500" />,
              title: "View Ratings & Portfolios",
              desc: "See past work, reviews, and verify credentials before hiring.",
            },
            {
              icon: <ClipboardList className="w-12 h-12 text-green-500" />,
              title: "Request Quotes",
              desc: "Get accurate budget estimates from verified professionals.",
            },
            {
              icon: <Users className="w-12 h-12 text-purple-500" />,
              title: "Collaborative Tools",
              desc: "Enable architects and engineers to work together seamlessly.",
            },
            {
              icon: <MapPin className="w-12 h-12 text-red-500" />,
              title: "Project Tracking",
              desc: "Track your project progress with interactive maps and updates.",
            },
            {
              icon: <Star className="w-12 h-12 text-blue-500" />,
              title: "3D Design Previews",
              desc: "Visualize your dream home before construction begins.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white text-center py-6">
        <p>© 2025 NirmaanSathi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
