import React, { useState } from "react";
import {
  Truck,
  Package,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plane,
  Zap,
  Shield,
  FileText,
  Box,
} from "lucide-react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO TechGear Solutions",
      quote:
        "As a business owner, reliability is everything. MA Logistic has been our trusted logistics partner for years, ensuring our shipments across Germany arrive on time and in perfect condition. Their professionalism and attention to detail have truly set them apart.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      position: "Operations Director Global Trade Co",
      quote:
        "MA Logistic has transformed our supply operations. Their transparent pricing and reliable service across Germany have saved us both time and money. I highly recommend them to any business looking for a dependable logistics partner.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "What types of freight services do you offer?",
      answer:
        "We provide comprehensive freight services across Germany, including air, express, and land transportation, as well as warehousing and cargo insurance.",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "You can track your shipment in real-time through our online tracking system using your unique tracking number provided at booking.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we specialize in nationwide delivery across Germany, providing the most reliable and efficient service within the country.",
    },
    {
      question: "How can I request a shipping quote?",
      answer:
        "You can request a quote through our online calculator, by contacting us via phone, or by filling out our contact form with your shipment details.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="text-2xl font-bold text-white">MA Logistic</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="text-white hover:text-white/90 transition"
              >
                Home
              </a>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("solutions");
                }}
                className="text-white hover:text-white/90 transition"
              >
                Solutions
              </a>
              <a
                href="#use-cases"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("use-cases");
                }}
                className="text-white hover:text-white/90 transition"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("testimonials");
                }}
                className="text-white hover:text-white/90 transition"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("pricing");
                }}
                className="text-white hover:text-white/90 transition"
              >
                Pricings
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-gray-900 px-5 py-2.5 rounded-lg hover:bg-white/90 transition text-sm font-medium"
              >
                Contact Us
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Home
              </a>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("solutions");
                }}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Solutions
              </a>
              <a
                href="#use-cases"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("use-cases");
                }}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("testimonials");
                }}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("pricing");
                }}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Pricings
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Full Screen Fixed Image */}
      <section id="home" className="relative h-screen flex items-center pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Freight Solutions
              <br />
              With On-Time
              <br />
              Deliveries in Germany
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              MA Logistic offers a full range of freight services across
              Germany, ensuring reliable, cost-effective, and on-time deliveries
              tailored to meet the unique needs of your business.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
              We are a trusted freight and logistics company in Germany,
              delivering timely, secure, and cost-effective solutions for
              businesses of all sizes nationwide.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-3">
                99%
              </div>
              <div className="text-gray-600 text-sm">On-Time Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-3">
                92%
              </div>
              <div className="text-gray-600 text-sm">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-3">
                87%
              </div>
              <div className="text-gray-600 text-sm">Cargo Safety Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-3">
                93%
              </div>
              <div className="text-gray-600 text-sm">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Reliable solutions
                <br />
                to streamline your
                <br />
                supply chain in Germany
              </h2>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition font-semibold shadow-lg"
              >
                Get a Quote
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=700&h=500&fit=crop"
                alt="Delivery worker"
                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Plane className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Air Freight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and secure air freight solutions to ensure your goods reach
                their destination on time across Germany.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Express Freight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and reliable express freight services for quick delivery
                anywhere in Germany without compromising safety.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Land Freight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Efficient land transportation for reliable nationwide deliveries
                across Germany, ensuring the best rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="use-cases" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Box className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Warehousing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible and secure storage for your goods, ensuring safe
                handling and easy access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Shipping Documents
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert handling of shipping documentation to ensure a smooth and
                hassle-free delivery experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Freight Insurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive freight insurance to protect your goods against
                any unforeseen risks during transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Businesses
                <br />
                Trust MA Logistic in Germany
                <br />
                For Their Freight
              </h2>
            </div>

            <div className="relative">
              <div className="flex justify-end mb-6 space-x-3">
                <button
                  onClick={() =>
                    setActiveTestimonial(Math.max(0, activeTestimonial - 1))
                  }
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
                  disabled={activeTestimonial === 0}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      Math.min(testimonials.length - 1, activeTestimonial + 1)
                    )
                  }
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition shadow-sm"
                  disabled={activeTestimonial === testimonials.length - 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <div className="flex items-start space-x-6 mb-8">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get All the Details
              <br />
              About Our Freight
              <br />
              Solutions in Germany
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to the most common questions about our freight
              services and how MA Logistic can support your logistics needs
              across Germany.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              We are a trusted freight and
              <br />
              logistics company in Germany,
              <br />
              delivering timely and secure shipments.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("solutions")}
                className="bg-transparent text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition font-semibold border-2 border-white"
              >
                See Our Service
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Truck className="text-white w-6 h-6" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  MA Logistic
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable and efficient freight solutions across Germany,
                simplifying and optimizing your supply chain with timely
                deliveries.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">
                Navigation
              </h4>
              <div className="space-y-2.5">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Home
                </a>
                <a
                  href="#solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("solutions");
                  }}
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Solutions
                </a>
                <a
                  href="#use-cases"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("use-cases");
                  }}
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Case Study
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Testimonials
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">About Us</h4>
              <div className="space-y-2.5">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Become a Partner
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">Legal</h4>
              <div className="space-y-2.5">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Agreement
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Privacy and Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 text-sm"
                >
                  Licenses
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>Copyright 2025. MA Logistic</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
