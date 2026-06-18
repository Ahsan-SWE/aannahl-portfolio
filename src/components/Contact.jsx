

const Contact = () => (
  <section className="py-24 bg-[#1f2937] text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-extrabold mb-12 uppercase tracking-widest">Get In Touch</h2>
      <form className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <input type="text" placeholder="First Name" className="w-full md:w-1/2 p-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#f97316] placeholder-gray-400 transition" />
          <input type="text" placeholder="Last Name" className="w-full md:w-1/2 p-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#f97316] placeholder-gray-400 transition" />
        </div>
        <input type="email" placeholder="Email" className="w-full p-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#f97316] placeholder-gray-400 transition" />
        <textarea placeholder="Write your message here..." rows="4" className="w-full p-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#f97316] placeholder-gray-400 transition resize-none"></textarea>
        <button type="submit" className="border-2 border-gray-500 text-gray-300 hover:bg-[#f97316] hover:border-[#f97316] hover:text-white px-16 py-3 font-bold uppercase tracking-widest transition mt-8">
          SEND
        </button>
      </form>
    </div>
  </section>
);

export default Contact;