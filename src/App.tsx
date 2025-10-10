import React, { useState, useEffect } from "react";
import {
  Truck,
  Package,
  MapPin,
  Phone,
  Mail,
  Calculator,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Clock,
  Shield,
  Globe,
} from "lucide-react";

// Types
interface CalculatorFormData {
  pickup: string;
  destination: string;
  weight: number;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorFormData>({
    pickup: "",
    destination: "",
    weight: 0,
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [estimatedDistance, setEstimatedDistance] = useState<number | null>(
    null
  );
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const calculatePrice = (e: React.FormEvent) => {
    e.preventDefault();
    const distance = Math.floor(Math.random() * 290) + 10;
    const basePrice = 10;
    const pricePerKm = 1.2;
    const weightSurcharge =
      calculatorData.weight > 50 ? (calculatorData.weight - 50) * 0.5 : 0;
    const total = basePrice + distance * pricePerKm + weightSurcharge;

    setEstimatedDistance(distance);
    setEstimatedPrice(Math.round(total * 100) / 100);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm z-40 border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="text-yellow-400 w-8 h-8" />
              <span className="text-white text-xl font-bold">MA Logistic</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-yellow-400 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-yellow-400 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-yellow-400 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-white hover:text-yellow-400 transition"
              >
                Calculator
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-yellow-400 transition"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-400">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white hover:text-yellow-400 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white hover:text-yellow-400 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-white hover:text-yellow-400 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="block text-white hover:text-yellow-400 transition"
              >
                Calculator
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-white hover:text-yellow-400 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 bg-opacity-10 border border-yellow-400 rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              Hamburg, Germany
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            MA <span className="text-yellow-400">Logistic</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Reliable Cargo & Delivery Services from Hamburg to Anywhere in
            Europe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("calculator")}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Get an Estimate</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Animated Truck */}
        <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
          <Truck
            className="text-yellow-400 opacity-20 w-16 h-16 animate-bounce"
            style={{ marginLeft: "10%" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About <span className="text-yellow-400">MA Logistic</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MA Logistic is a Hamburg-based cargo company offering fast and
                secure delivery services across Europe. We partner with Deutsche
                Post and handle private deliveries with transparent
                per-kilometer pricing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our commitment to precision, reliability, and customer
                satisfaction has made us a trusted partner for businesses and
                individuals throughout Germany and neighboring EU countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold">Insured Deliveries</span>
                </div>
                <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold">On-Time Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-lg">
                  <Globe className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold">EU-Wide Coverage</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl text-center transform hover:scale-105 transition">
                <Package className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Pickup</h3>
                <p className="text-gray-400 text-sm">We collect your cargo</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl text-center transform hover:scale-105 transition">
                <Truck className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Transport</h3>
                <p className="text-gray-400 text-sm">
                  Safe journey across Europe
                </p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl text-center transform hover:scale-105 transition">
                <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Delivery</h3>
                <p className="text-gray-400 text-sm">
                  Precise destination drop-off
                </p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl text-center transform hover:scale-105 transition">
                <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Confirm</h3>
                <p className="text-gray-400 text-sm">Delivery verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Partner Deliveries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-yellow-400">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Partner Deliveries
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamless integration with Deutsche Post and trusted logistics
                partners across Europe. We handle your packages with care
                through our established network, ensuring reliable and
                cost-effective delivery solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Deutsche Post partnership
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standardized pricing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Extensive delivery network
                  </span>
                </li>
              </ul>
            </div>

            {/* Private Deliveries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-t-4 border-yellow-400">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Private Deliveries
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct cargo transport tailored to your specific needs. Our
                private delivery service offers transparent per-kilometer
                pricing, giving you full control and flexibility for specialized
                shipments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    €1.20 per kilometer pricing
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct cargo transport</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Price <span className="text-yellow-400">Calculator</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4" />
            <p className="text-gray-300 text-lg">
              Get an instant estimate for your delivery
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., Hamburg, Germany"
                  value={calculatorData.pickup}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      pickup: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Delivery Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g., Berlin, Germany"
                  value={calculatorData.destination}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      destination: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 25"
                  value={calculatorData.weight || ""}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      weight: Number(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                />
              </div>

              <button
                onClick={calculatePrice}
                disabled={
                  !calculatorData.pickup ||
                  !calculatorData.destination ||
                  !calculatorData.weight
                }
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Price</span>
              </button>
            </div>

            {estimatedPrice !== null && (
              <div className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6">
                <div className="text-center">
                  <p className="text-black text-lg font-semibold mb-2">
                    Estimated Price
                  </p>
                  <p className="text-black text-5xl font-bold mb-2">
                    €{estimatedPrice}
                  </p>
                  <p className="text-gray-800 text-sm mb-4">
                    for approximately {estimatedDistance} km distance
                  </p>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition"
                  >
                    Book Delivery
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Get in <span className="text-yellow-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">
                Send us a message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message / Package Details
                  </label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  onClick={handleContactSubmit}
                  disabled={
                    !contactForm.name ||
                    !contactForm.email ||
                    !contactForm.phone ||
                    !contactForm.message
                  }
                  className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Inquiry
                </button>
              </div>

              {formSubmitted && (
                <div className="mt-4 bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">
                    Message sent successfully!
                  </span>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">Hamburg, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+49 40 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@malogistic.de</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152513.47118168696!2d9.845035!3d53.550341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="MA Logistic Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="text-yellow-400 w-8 h-8" />
                <span className="text-xl font-bold">MA Logistic</span>
              </div>
              <p className="text-gray-400">
                Reliable cargo and delivery services from Hamburg to anywhere in
                Europe.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("calculator")}
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Calculator
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-yellow-400 transition"
                >
                  Imprint
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 MA Logistic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
