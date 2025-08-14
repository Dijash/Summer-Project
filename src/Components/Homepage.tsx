import { useState, useEffect } from "react";
import {
  Search,
  Star,
  Users,
  MapPin,
  ClipboardList,
  Shield,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Building2,
  Phone,
  Mail,
  Menu,
  X,
  PlayCircle,
} from "lucide-react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "1,000+", label: "Verified Professionals" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Cities Covered" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Professional Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-4" : "bg-white py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <a href="/homepage">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                NirmaanSathi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/search"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Find Professionals
            </a>
            <a
              href="/projects"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Project Map
            </a>
            <a
              href="/quote-request"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Get Quote
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sign In
            </button>
            <a
              href="/quote-request"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="/search" className="block text-gray-700 font-medium">
                Find Professionals
              </a>
              <a href="/projects" className="block text-gray-700 font-medium">
                Project Map
              </a>
              <a
                href="/quote-request"
                className="block text-gray-700 font-medium"
              >
                Get Quote
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-700 font-medium"
              >
                How It Works
              </a>
              <a href="#contact" className="block text-gray-700 font-medium">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left text-gray-700 font-medium">
                  Sign In
                </button>
                <a
                  href="/quote-request"
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Clean Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-8 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 1,000+ professionals across Nepal
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect with Nepal's Top <br />
              <span className="text-blue-600">Construction Professionals</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Find verified architects, engineers, and contractors for your
              construction project. From planning to completion, we make
              building in Nepal simple and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/search"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
              >
                Find Professionals
              </a>
              <button className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Construction Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your construction project from start
              to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6 text-blue-600" />,
                title: "Find Professionals",
                description:
                  "Search and connect with verified architects, engineers, and contractors in your area.",
              },
              {
                icon: <Shield className="w-6 h-6 text-green-600" />,
                title: "Verified Network",
                description:
                  "All professionals are background-checked, licensed, and insured for your protection.",
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
                title: "Project Management",
                description:
                  "Track progress, manage budgets, and communicate with your team in one platform.",
              },
              {
                icon: <Star className="w-6 h-6 text-yellow-600" />,
                title: "Reviews & Ratings",
                description:
                  "Read authentic reviews and see portfolios before choosing your professionals.",
              },
              {
                icon: <MapPin className="w-6 h-6 text-red-600" />,
                title: "Local Expertise",
                description:
                  "Find professionals who understand local building codes and regulations.",
              },
              {
                icon: <Award className="w-6 h-6 text-indigo-600" />,
                title: "Quality Assurance",
                description:
                  "Regular quality checks and milestone reviews ensure project standards.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with your construction project in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Post Your Project",
                description:
                  "Tell us about your construction project, budget, timeline, and location requirements.",
              },
              {
                step: "02",
                title: "Get Matched",
                description:
                  "We connect you with qualified professionals who match your project needs and budget.",
              },
              {
                step: "03",
                title: "Start Building",
                description:
                  "Review profiles, compare quotes, and start your project with confidence.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Types */}
      <section id="professionals" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find the Right Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with experienced professionals specialized in different
              aspects of construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Architects",
                count: "250+",
                image:
                  "https://i.pinimg.com/736x/69/5b/2b/695b2b711aca42ae973b0c235ea521b1.jpg",
              },
              {
                title: "Civil Engineers",
                count: "180+",
                image:
                  "https://i.pinimg.com/1200x/71/ac/50/71ac50666ba9a841b3f5cf0172b3aa09.jpg",
              },
              {
                title: "Contractors",
                count: "320+",
                image:
                  "https://i.pinimg.com/736x/e9/54/41/e9544179fb8fe94729285978021480d5.jpg",
              },
              {
                title: "Interior Designers",
                count: "150+",
                image:
                  "https://i.pinimg.com/736x/b7/2c/72/b72c72ac116cfa7c4000c4a049f6775e.jpg",
              },
            ].map((prof, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={prof.image}
                  alt={prof.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {prof.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {prof.count} professionals
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied clients across Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John Andreson",
                role: "Homeowner, Kathmandu",
                content:
                  "NirmaanSathi helped us find an excellent architect for our dream home. The process was smooth and transparent from start to finish.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIDLyE2qiXbONA33TsxXBaa9vUEn3VxXw3A&s",
              },
              {
                name: "Tina Johnson",
                role: "Business Owner, Pokhara",
                content:
                  "Finding reliable contractors for our office building was challenging until we discovered NirmaanSathi. Highly recommended!",
                image:
                  "https://imgcdn.stablediffusionweb.com/2024/12/3/80f18dc7-e45d-43fa-81b2-3048e4672cea.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect
            construction professionals through NirmaanSathi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote-request"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Get Quote Today
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">NirmaanSathi</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-4">
                Nepal's trusted platform for connecting clients with verified
                construction professionals.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+977-1-4567890</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@nirmaansathi.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/search"
                    className="hover:text-white transition-colors"
                  >
                    Find Professionals
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-white transition-colors"
                  >
                    Project Map
                  </a>
                </li>
                <li>
                  <a
                    href="/quote-request"
                    className="hover:text-white transition-colors"
                  >
                    Request Quote
                  </a>
                </li>
                <li>
                  <a
                    href="/admin"
                    className="hover:text-white transition-colors"
                  >
                    Admin Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 NirmaanSathi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
