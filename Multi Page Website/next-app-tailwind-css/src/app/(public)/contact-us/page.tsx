function ContactUs() {
  return (
    <form className="w-full max-w-lg mx-auto mt-20 mb-20 p-6 border border-gray-300 shadow-lg rounded-lg">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Write us a message</h1>
      </div>

      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <textarea
          cols={3}
          rows={6}
          placeholder="Write a message"
          className="w-full focus:outline-none"
        ></textarea>
      </div>

      <div className="mb-6 text-center bg-black text-white rounded-lg px-3 py-2 mt-8 cursor-pointer">
        <button>Contact Us</button>
      </div>
    </form>
  );
}

export default ContactUs;
