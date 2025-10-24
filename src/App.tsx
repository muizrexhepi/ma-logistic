import { useState } from "react";
import {
  Truck,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

  // Testimonials (kept from your previous version)
  const testimonials = [
    {
      name: "Anna Müller",
      position: "Berlin",
      quote:
        "I ordered a fragile package from Munich to Berlin, and it arrived exactly on time — no damage, no stress. Everything was super smooth!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    },
    {
      name: "Thomas Becker",
      position: "Hamburg",
      quote:
        "I was worried about delays, but my delivery came earlier than expected. Tracking was easy and communication was great. Highly recommend!",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop",
    },
    {
      name: "Laura Schneider",
      position: "Frankfurt",
      quote:
        "Best delivery service I’ve used in Germany. No hassle, no waiting around — my package arrived safely and right on schedule.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What types of freight services do you offer?",
      answer:
        "We provide fast express delivery and reliable land freight across Germany. We also offer warehousing and freight insurance for extra peace of mind.",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "You’ll receive a unique tracking number when you book. You can easily check where your package is in real-time on our website.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Right now, we focus on nationwide delivery within Germany — ensuring the fastest and most reliable service possible.",
    },
    {
      question: "How can I request a shipping quote?",
      answer:
        "You can use our online calculator or simply contact us via phone or form. We'll get back to you quickly with a clear price.",
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
              {[
                "home",
                "solutions",
                "use-cases",
                "testimonials",
                "pricing",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="text-white hover:text-white/90 transition capitalize"
                >
                  {item.replace("-", " ")}
                </a>
              ))}
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
              {[
                "home",
                "solutions",
                "use-cases",
                "testimonials",
                "pricing",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="block text-gray-600 hover:text-gray-900 py-2 capitalize"
                >
                  {item.replace("-", " ")}
                </a>
              ))}
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

      {/* Hero Section */}
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
              Honest & Reliable
              <br />
              Freight Solutions
              <br />
              in Germany
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We're a new logistics company built on honesty and trust. No
              shortcuts — just clear communication, fair pricing, and reliable
              delivery across Germany.
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
              We’re new, but we’re serious about doing things right. Our mission
              is to build a trusted logistics service in Germany — one delivery
              at a time.
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
                Building trust
                <br />
                through transparent
                <br />
                logistics in Germany
              </h2>
              <p className="text-gray-600 mb-6">
                We don’t promise the impossible — we deliver what we say. Clear
                pricing, reliable service, and honest communication every step
                of the way.
              </p>
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Express Freight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast and reliable express freight services for quick delivery
                anywhere in Germany — no false promises, just real effort.
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
                Efficient land transportation for nationwide deliveries across
                Germany, done with care and full transparency.
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
                Secure and flexible storage options to make your logistics
                smoother from start to finish.
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
                We handle your shipping documents with precision — no
                unnecessary complexity, just clarity.
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
                Optional freight insurance to keep your shipment protected every
                step of the way.
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
                What Our Customers
                <br />
                Say About Us
              </h2>
              <p className="mt-4 text-gray-600 max-w-md">
                We believe trust is earned through actions, not words. These are
                real stories from happy customers.
              </p>
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
              Honest Answers to
              <br />
              Common Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We keep things simple and clear. Here’s everything you need to
              know before working with us.
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
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
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
              We’re building something real.
              <br />
              No false promises — just honest,
              <br />
              reliable service across Germany.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("solutions")}
                className="bg-transparent text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition font-semibold border-2 border-white"
              >
                See Our Services
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
                A new logistics company built on trust and transparency. No
                shortcuts, no empty promises — just honest, reliable freight
                solutions across Germany.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">
                Navigation
              </h4>
              <div className="space-y-2.5">
                {["home", "solutions", "use-cases", "testimonials"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item);
                      }}
                      className="block text-gray-600 hover:text-gray-900 text-sm capitalize"
                    >
                      {item.replace("-", " ")}
                    </a>
                  )
                )}
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
            <p>© 2025 MA Logistic</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
