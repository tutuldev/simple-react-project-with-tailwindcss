import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/" className="text-white mx-3 hover:text-gray-400 transition duration-300">Home</Link>
          <Link to="/about" className="text-white mx-3 hover:text-gray-400 transition duration-300">About</Link>
          <Link to="/contact" className="text-white mx-3 hover:text-gray-400 transition duration-300">Contact</Link>
          <Link to="/address" className="text-white mx-3 hover:text-gray-400 transition duration-300">Address</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
