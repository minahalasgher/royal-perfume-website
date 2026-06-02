const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-yellow-500">
            Contact Us
          </p>

          <h2
            className="text-4xl md:text-6xl mt-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Get In
            <span className="block text-yellow-500">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have questions about our luxury fragrances?
            We'd love to hear from you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>

            <div className="mb-8">
              <h3 className="text-2xl text-yellow-500 mb-3">
                Address
              </h3>
              <p className="text-gray-400">
                Faisalabad, Pakistan
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl text-yellow-500 mb-3">
                Email
              </h3>
              <p className="text-gray-400">
                minahilasghar218@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-yellow-500 mb-3">
                Phone
              </h3>
              <p className="text-gray-400">
                +92 313 0070745
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="
              bg-black
              border
              border-yellow-500/20
              rounded-[30px]
              p-8
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-[#111]
                border border-yellow-500/20
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-[#111]
                border border-yellow-500/20
                outline-none
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="
                w-full
                mb-4
                p-4
                rounded-xl
                bg-[#111]
                border border-yellow-500/20
                outline-none
              "
            ></textarea>

            <button
              type="submit"
              className="
                w-full
                py-4
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
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;