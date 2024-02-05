import { useEffect, useState } from "react";
import Mood from "../Pages/Home/Mood";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:px-12 md:px-6 navbar fixed top-0 w-full z-10 text-golden font-bold uppercase p-5 opacity bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-red-700 text-xl font-bold">Liton Nath</span>
        <div className="md:hidden">
          <label htmlFor="my-drawer" className="btn drawer-button"></label>
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          <ul className="px-1 flex gap-10">
            <li>HOME</li>
            <li></li>
            <l>
              <a href="#contactUs">Contact</a>
            </l>
          </ul>
          <Mood></Mood>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
