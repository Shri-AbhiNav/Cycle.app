import CircleLogo from "@/assets/circlelogo.svg";

const Header = () => {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 
                 z-50 w-[52%] max-w-6xl 
                 bg-white rounded-full shadow-lg border border-gray-200
                 px-6 py-3 flex items-center justify-between"
    >
      {}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img src={CircleLogo} alt="Cycle Logo" className="h-4 w-4 filter brightness-0" />
          <span className="text-black text-xl font-bold leading-6 h-6 flex items-center">Cycle</span>
        </div>
      </div>

      {}
      <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <a href="#product" className="hover:text-black">Product</a>
        <a href="#changelog" className="hover:text-black">Changelog</a>
        <a href="#customers" className="hover:text-black">Customers</a>
        <a href="#resources" className="hover:text-black">Resources</a>
        <a href="#login" className="hover:text-black">Log in</a>
      </nav>

      {}
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">
          Book a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
