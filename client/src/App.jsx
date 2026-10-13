function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow">
        <h1 className="text-2xl font-bold text-blue-800">
          ME Technologies
        </h1>

        <div className="hidden gap-6 md:flex">
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

        <a
          href="#services"
          className="mt-8 inline-block rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Explore Services
        </a>
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

      {/* Services Section */}
      <section id="services" className="bg-gray-100 px-8 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-900">
          Our Services
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-800">
              Solar Energy
            </h3>
            <p className="mt-3 text-gray-600">
              Solar PV design and sustainable energy solutions.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-800">
              EV Charging
            </h3>
            <p className="mt-3 text-gray-600">
              Modern electric vehicle charging solutions.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-800">
              Engineering Design
            </h3>
            <p className="mt-3 text-gray-600">
              Electrical, civil, structural, and building design.
            </p>
          </div>
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

      {/* Contact Section */}
      <section id="contact" className="bg-blue-950 px-8 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-4 text-gray-300">
          Contact us to discuss your engineering project.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-8 py-5 text-center text-white">
        <p>© 2026 ME Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;