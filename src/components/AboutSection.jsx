const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 lg:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative flex justify-center">

          <div className="w-[280px] md:w-[380px] rounded-[30px] overflow-hidden border border-yellow-500/30 shadow-2xl">
            <img
              src="/src/assets/perfume10.png"
              alt="Perfume"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small floating image */}
          <div className="absolute -bottom-10 -right-10 w-[180px] rounded-[25px] overflow-hidden border border-yellow-500/40 shadow-xl">
            <img
              src="/src/assets/perfume11.png"
              alt="Perfume detail"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Right Content */}
        <div>

          <p className="uppercase tracking-[8px] text-yellow-500">
            About Us
          </p>

          <h2
            className="text-4xl md:text-6xl mt-4 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Luxury Perfumes
            <span className="block text-yellow-500">
              Crafted with Passion
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            We create premium luxury perfumes with a perfect blend of elegance,
            tradition and modern style. Every fragrance is designed to leave a
            lasting impression and define your personality.
          </p>

          {/* Points */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-yellow-500">✔</span>
              <p className="text-gray-300">Premium quality ingredients</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500">✔</span>
              <p className="text-gray-300">Long-lasting fragrance</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500">✔</span>
              <p className="text-gray-300">Luxury black & gold branding</p>
            </div>

          </div>

          <button className="mt-10 px-8 py-3 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;