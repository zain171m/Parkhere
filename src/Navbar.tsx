import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="border-2 bg-white text-black flex flex-row justify-between align-middle flex-wrap px-2 lg:px-5 xl:px-20">
      <div className="flex flex-row ">
        <div className="flex flex-row gap-6 ">
          <button className="flex py-2 border-r text-purple-600">
            <img className="h-20" src="/logo.jpeg" alt="Logo" />
          </button>
        </div>
        <button className="cursor-pointer m-4 uppercase border-white h-14 text-white  bg-purple-600 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#c084fc] transition">
          Park Your Car
        </button>
      </div>
      <button
        className="text-white text-2xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
            data-testid="core-ui-icon-close"
          >
            <path d="M29 4.582 27.418 3l-11.43 11.406L4.582 3 3 4.582l11.406 11.406L3 27.395 4.582 29l11.406-11.407L27.418 29 29 27.395 17.593 15.988 29 4.582Z"></path>
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
            data-testid="core-ui-icon-horizontal-menu"
          >
            <path d="M29 7.75H3v1.989h26V7.75Zm0 7.26H3V17h26v-1.99Zm0 7.238H3v1.989h26v-1.99Z"></path>
          </svg>
        )}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex flex-col lg:flex-row lg:justify-items-center w-full lg:w-auto mt-4 lg:mt-0`}
      >
        {/* <button
          // onClick={() => scrollToSection("skills")}
          className="text-white text-lg sm:text-xl hover:bg-purple-800 px-5 rounded-sm shadow-md "
        >
          Skills
        </button> */}

        <button
          onClick={() => navigate("parking")}
          className="border-x  font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition "
        >
          Find a parking spot
        </button>
        <button className="border-x  font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition ">
          List your parking
        </button>
        <button
          onClick={() => navigate("login")}
          className="border-x  font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition "
        >
          Login
        </button>
        <button
          onClick={() => navigate("signup")}
          className="border-x  font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] transition"
        >
          Sign up
        </button>
        {/* <button className="relative  bg-white isolation-auto z-10 border-x before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-purple-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3  text-black  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Button
        </button> */}
        <label className="switch m-7">
          <p className="text-xs font-bold">LIGHT MODE</p>
          <input className="peer hidden" type="checkbox" />
          <span className="slider absolute h-5 w-5 translate-x-0.5 translate-y-0.5 border-2 border-black bg-purple-600 shadow-[inset_2px_3px_2px] duration-700 peer-checked:translate-x-[1.6rem] peer-checked:border-gray-200 peer-checked:bg-white peer-checked:shadow-[inset_-2px_-2px_3px]"></span>
          <div className="h-6 w-12  border-2 border-black shadow-[2px_3px_2px] duration-700 peer-checked:bg-purple-600"></div>
        </label>
      </div>
    </div>
  );
};
export default Navbar;
