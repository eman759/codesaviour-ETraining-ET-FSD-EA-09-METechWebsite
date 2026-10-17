import { useEffect, useState } from "react";
function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/services"
        );

        if (!response.ok) {
          throw new Error("Unable to load services");
        }

        const data = await response.json();

        setServices(
          Array.isArray(data) ? data : data.services || []
        );
      } catch (err) {
        setError("Services could not be loaded. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
<nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-5 shadow md:px-8">
  <h1 className="text-2xl font-bold text-blue-800">
    ME Technologies
  </h1>

  <div className="flex flex-wrap items-center gap-4 md:gap-6">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#services">Services</a>
    <a href="#training">Training</a>
    <a href="#contact">Contact</a>
  </div>

  <a
    href="#contact"
    className="rounded-lg bg-blue-800 px-5 py-3 text-white"
  >
    Get a Quote
  </a>
</nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-blue-950 px-8 py-24 text-center text-white"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
          Engineering & Training Solutions
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold md:text-6xl">
          Smart Engineering Today.
          <span className="block text-blue-300">
            Sustainable Tomorrow.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Innovative engineering solutions, sustainable energy
          systems, and professional technical training.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#contact"
    className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-gray-100"
  >
    Get a Quote
  </a>

  <a
    href="#training"
    className="inline-block rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-blue-700"
  >
    View Training
  </a>
</div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900">
          Welcome to ME Technologies
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          We provide engineering consultancy, renewable energy
          solutions, and technical training to help build a
          smarter and more sustainable future.
        </p>
      </section>

      {/* Impact Counters Section */}
<section className="bg-blue-900 px-4 py-12 text-white md:px-8">
  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
    <div>
      <h2 className="text-3xl font-bold md:text-4xl">50+</h2>
      <p className="mt-2">Projects Supported</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold md:text-4xl">100+</h2>
      <p className="mt-2">Students Trained</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold md:text-4xl">6</h2>
      <p className="mt-2">Core Services</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold md:text-4xl">24/7</h2>
      <p className="mt-2">Customer Support</p>
    </div>
  </div>
</section>

      {/* How We Work Section */}
<section className="bg-white px-4 py-16 md:px-8">
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-10 text-center text-3xl font-bold text-blue-900">
      How We Work
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div className="rounded-xl bg-gray-100 p-6 text-center shadow">
        <h3 className="text-lg font-bold text-blue-800">01. Consultation</h3>
        <p className="mt-3 text-gray-600">We understand your needs and project goals.</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-6 text-center shadow">
        <h3 className="text-lg font-bold text-blue-800">02. Site Survey</h3>
        <p className="mt-3 text-gray-600">We review the site and project requirements.</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-6 text-center shadow">
        <h3 className="text-lg font-bold text-blue-800">03. Design & Proposal</h3>
        <p className="mt-3 text-gray-600">We prepare a suitable technical solution.</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-6 text-center shadow">
        <h3 className="text-lg font-bold text-blue-800">04. Installation</h3>
        <p className="mt-3 text-gray-600">We help implement the agreed solution.</p>
      </div>

      <div className="rounded-xl bg-gray-100 p-6 text-center shadow">
        <h3 className="text-lg font-bold text-blue-800">05. Support</h3>
        <p className="mt-3 text-gray-600">We provide ongoing technical guidance.</p>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-gray-100 px-4 py-16 md:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-900">
          Our Services
        </h2>

        {loading && (
          <p className="text-center">Loading services...</p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!loading && !error && services.length === 0 && (
          <p className="text-center">No services available.</p>
        )}

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id || service.slug || service.title}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h3 className="text-xl font-bold text-blue-800">
                {service.title || "Engineering Service"}
              </h3>

              <p className="mt-3 text-gray-600">
                {service.shortText ||
                  service.description ||
                  "Learn more about this service."}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* EV Charging Highlight Section */}
<section className="bg-blue-900 px-4 py-16 text-white md:px-8">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="mb-6 text-3xl font-bold">
      EV Charging Solutions
    </h2>

    <p className="mx-auto mb-8 max-w-3xl text-lg">
      Explore modern electric vehicle charging solutions designed
      to support cleaner transportation and a sustainable future.
    </p>

    <a
      href="#contact"
      className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-gray-100"
    >
      Enquire About EV Charging
    </a>
  </div>
</section>

      {/* Training Section */}
      <section id="training" className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900">
          Professional Training
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Develop practical skills through our technical training
          programs and industry-focused courses.
        </p>
      </section>
      {/* Software & Tools Section */}
<section className="bg-white px-4 py-16 md:px-8">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="mb-4 text-3xl font-bold text-blue-900">
      Software & Tools
    </h2>

    <p className="mb-10 text-gray-600">
      Professional tools used for engineering design, analysis, and visualization.
    </p>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="rounded-xl bg-gray-100 p-6 font-bold text-blue-800 shadow">
        MATLAB
      </div>
      <div className="rounded-xl bg-gray-100 p-6 font-bold text-blue-800 shadow">
        Proteus
      </div>
      <div className="rounded-xl bg-gray-100 p-6 font-bold text-blue-800 shadow">
        SketchUp
      </div>
      <div className="rounded-xl bg-gray-100 p-6 font-bold text-blue-800 shadow">
        Multisim
      </div>
    </div>
  </div>
</section>
      {/* Latest Blog Posts Section */}
<section className="bg-gray-100 px-4 py-16 md:px-8">
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-10 text-center text-3xl font-bold text-blue-900">
      Latest Blog Posts
    </h2>

    <div className="grid gap-6 md:grid-cols-3">
      <article className="rounded-xl bg-white p-6 shadow">
        <p className="mb-3 text-sm font-semibold text-blue-700">
          Renewable Energy
        </p>
        <h3 className="text-xl font-bold text-blue-900">
          Benefits of Solar Energy
        </h3>
        <p className="mt-3 text-gray-600">
          Discover how solar energy can support a cleaner and more sustainable future.
        </p>
      </article>

      <article className="rounded-xl bg-white p-6 shadow">
        <p className="mb-3 text-sm font-semibold text-blue-700">
          EV Charging
        </p>
        <h3 className="text-xl font-bold text-blue-900">
          Understanding EV Charging
        </h3>
        <p className="mt-3 text-gray-600">
          Learn about electric vehicle charging and its role in modern transportation.
        </p>
      </article>

      <article className="rounded-xl bg-white p-6 shadow">
        <p className="mb-3 text-sm font-semibold text-blue-700">
          Technical Training
        </p>
        <h3 className="text-xl font-bold text-blue-900">
          Building Engineering Skills
        </h3>
        <p className="mt-3 text-gray-600">
          Explore how practical technical training helps develop professional skills.
        </p>
      </article>
    </div>
  </div>
</section>

{/* Call To Action Section */}
<section className="bg-blue-800 px-4 py-16 text-center text-white md:px-8">
  <div className="mx-auto max-w-4xl">
    <h2 className="mb-4 text-3xl font-bold">
      Ready to Start Your Project?
    </h2>

    <p className="mb-8 text-lg">
      Contact ME Technologies for engineering solutions,
      renewable energy services, and professional training.
    </p>

    <a
      href="#contact"
      className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-gray-100"
    >
      Contact Us Today
    </a>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-950 px-8 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-4 text-gray-300">
          Contact us to discuss your engineering project.
        </p>
      </section>

      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923166379325"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact us on WhatsApp"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-lg hover:bg-green-600"
>
  WhatsApp
</a>

      {/* Footer */}
      <footer className="bg-gray-900 px-8 py-5 text-center text-white">
        <p>© 2026 ME Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;