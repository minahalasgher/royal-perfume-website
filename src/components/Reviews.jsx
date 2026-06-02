const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayesha Khan",
      role: "Verified Customer",
      review:
        "Royal Essence has an amazing fragrance. It lasts all day and feels truly luxurious.",
    },
    {
      id: 2,
      name: "Ali Ahmed",
      role: "Perfume Lover",
      review:
        "Golden Desire is my favorite scent. Elegant, rich and perfect for special occasions.",
    },
    {
      id: 3,
      name: "Sara Malik",
      role: "Regular Customer",
      review:
        "Beautiful packaging and premium quality fragrance. I highly recommend it.",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-black text-white py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-yellow-500">
            Testimonials
          </p>

          <h2
            className="text-4xl md:text-6xl mt-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            What Our
            <span className="block text-yellow-500">
              Customers Say
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover why our luxury fragrances are loved by customers
            around the world.
          </p>

        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="
                bg-gradient-to-b
                from-[#141414]
                to-[#0a0a0a]
                border
                border-yellow-500/20
                rounded-[30px]
                p-8
                hover:border-yellow-500
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-400 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-500 text-sm">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;