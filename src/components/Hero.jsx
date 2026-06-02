import perfume from "../assets/perfume1.png";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
     id="home"
     className="relative min-h-screen flex items-center overflow-hidden bg-black pt-25 md:pt-25"
     >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>

      {/* Gold Glow */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[8px] text-yellow-500 mb-4">
              Premium Collection
            </p>

            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Luxury
              <span className="block text-yellow-500">
                Fragrance
              </span>
            </h1>

            <p className="text-gray-300 mt-6 max-w-lg text-lg leading-relaxed">
              Discover the art of elegance with our exclusive perfume
              collection. Crafted for those who appreciate luxury,
              sophistication and unforgettable scents.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 text-black font-bold hover:scale-105 transition">
                Shop Collection
              </button>

              <button className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                Explore More
              </button>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-yellow-500">
                  100+
                </h3>
                <p className="text-gray-400">
                  Premium Scents
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-500">
                  10K+
                </h3>
                <p className="text-gray-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={perfume}
              alt="Perfume"
              className="w-[280px] md:w-[450px] drop-shadow-[0_0_50px_rgba(255,215,0,0.5)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;