import perfume1 from "../assets/perfume5.png";
import perfume2 from "../assets/perfume6.png";
import perfume3 from "../assets/perfume7.png";
import perfume4 from "../assets/perfume8.png";


const Collection = () => {
  const perfumes = [
    {
      id: 1,
      image: perfume1,
      name: "Royal Essence",
      desc: "A rich blend of oud, amber and vanilla.",
      price: "$89",
    },
    {
      id: 2,
      image: perfume2,
      name: "Golden Desire",
      desc: "Elegant floral notes with a luxurious finish.",
      price: "$99",
    },
    {
      id: 3,
      image: perfume3,
      name: "Midnight Oud",
      desc: "Deep woody fragrance for a bold statement.",
      price: "$119",
    },
    {
      id: 4,
      image: perfume4,
      name: "Velvet Gold",
      desc: "Premium fragrance crafted for sophistication.",
      price: "$129",
    },
  ];

  return (
    <section
      id="collection"
      className="bg-black py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-yellow-500">
            Signature Collection
          </p>

          <h2
            className="text-4xl md:text-6xl text-white mt-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Discover Our
            <span className="block text-yellow-500">
              Finest Fragrances
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore luxury scents designed to express elegance,
            confidence and timeless beauty.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {perfumes.map((item) => (
            <div
              key={item.id}
              className="
              group
              bg-gradient-to-b
              from-[#141414]
              to-[#0a0a0a]
              border
              border-yellow-500/20
              rounded-[30px]
              p-8
              hover:border-yellow-500
              transition-all
              duration-500
              hover:-translate-y-3
              "
            >

              <div className="flex justify-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  h-64
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                  "
                />

              </div>

              <h3
                className="text-2xl text-white mt-6"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {item.name}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-6">

                <span className="text-yellow-500 text-2xl font-bold">
                  {item.price}
                </span>

                <span className="text-yellow-500">
                  ★★★★★
                </span>

              </div>

              <button
                className="
                w-full
                mt-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-yellow-700
                via-yellow-500
                to-yellow-400
                text-black
                font-bold
                hover:scale-105
                transition
                "
              >
                Add To Cart
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Collection;