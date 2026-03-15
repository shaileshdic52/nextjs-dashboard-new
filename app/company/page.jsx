'use client';
import React from "react";
import { Card, CardContent } from "../ui/components/card";
import { Button } from "../ui/components/button";
import { Wrench, Building2, Wind, Settings, ClipboardCheck } from "lucide-react";

export default function EngineeringHomepage() {
  const services = [
    {
      title: "Engineering Consultancy",
      description:
        "Expert consulting services for infrastructure planning, engineering design, and project execution support.",
      icon: <ClipboardCheck className="h-10 w-10" />,
    },
    {
      title: "MEP Installation",
      description:
        "Professional mechanical, electrical, and plumbing system installation for commercial and industrial projects.",
      icon: <Wrench className="h-10 w-10" />,
    },
    {
      title: "HVAC Systems",
      description:
        "Design, supply, and installation of advanced heating, ventilation, and air conditioning solutions.",
      icon: <Wind className="h-10 w-10" />,
    },
    {
      title: "Civil Construction",
      description:
        "Complete civil engineering and construction services including structural works and infrastructure development.",
      icon: <Building2 className="h-10 w-10" />,
    },
    {
      title: "Facility Management",
      description:
        "Comprehensive facility management services ensuring operational efficiency and safety.",
      icon: <Settings className="h-10 w-10" />,
    },
    {
      title: "Operations & Maintenance",
      description:
        "Reliable operation and maintenance services to ensure long-term performance of engineering systems.",
      icon: <Settings className="h-10 w-10" />,
    },
  ];

   const slides = [
    {
      title: "Engineering Excellence for Modern Infrastructure",
      desc: "Integrated engineering consultancy, MEP installation, HVAC solutions and civil construction services.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Advanced MEP & HVAC Solutions",
      desc: "Reliable mechanical, electrical, plumbing and climate control systems for complex facilities.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=60",
    },
    {
      title: "Construction & Facility Management Experts",
      desc: "From project execution to long-term operations and maintenance we support your infrastructure lifecycle.",
      image: "fc2.jpeg",
    },
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[index];

  const projects = [
    {
      title: "Commercial Office HVAC Installation",
      desc: "Complete HVAC design and installation for a multi-story corporate office building.",
      image: "raymond-yeung--BWDRf_mG9Q-unsplash.jpg",
    },
    {
      title: "Industrial MEP Infrastructure",
      desc: "Full MEP installation for a large manufacturing facility including electrical and plumbing systems.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    },
    {
      title: "Hospital Facility Management",
      desc: "End-to-end facility management and maintenance services for a healthcare campus.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      title: "Residential Tower Construction",
      desc: "Civil construction and structural work for a premium residential high-rise project.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Data Center Cooling Systems",
      desc: "Precision HVAC and cooling system installation for mission-critical data center operations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    },
    {
      title: "Airport Operations Maintenance",
      desc: "Long-term engineering operations and maintenance services for airport infrastructure.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Carousel */}
      <section
        className="relative text-white py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {currentSlide.title}
          </h1>
          <p className="text-lg opacity-90">{currentSlide.desc}</p>

          <div className="mt-8">
            <Button
              className="text-lg px-8 py-6 bg-blue-500 hover:bg-blue-400 border-2 border-white shadow-lg"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Consultation
            </Button>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">Our Core Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition">
              <CardContent className="p-6">
                <div className="mb-4 text-blue-700">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Project Showcase */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">Recent Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide integrated engineering and construction solutions with a
            focus on quality, safety, and efficiency. Our experienced team
            delivers innovative designs, reliable installations, and long‑term
            operational support for commercial, industrial, and infrastructure
            projects.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build Your Next Project</h2>
        <p className="opacity-90 mb-6">
          Contact our engineering experts to discuss your requirements.
        </p>
        <Button className="bg-white text-blue-800 hover:bg-gray-200 px-8 py-6 text-lg">
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        © {new Date().getFullYear()} Engineering Services Company. All rights reserved.
      </footer>
    </div>
  );
}
