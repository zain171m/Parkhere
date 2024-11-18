import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-20 border-2 bg-white text-black flex flex-row justify-between align-middle flex-wrap px-20">
      <div className="flex flex-row gap-6">
        <button className="flex py-2 border-r text-purple-600">
          <svg
            width="64"
            color="#9333ea"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
            data-testid="core-ui-icon-lyft"
          >
            <path d="M12.816 11.368h3.813v8.559c0 1.595-.555 2.92-1.596 3.826-.933.812-2.23 1.258-3.65 1.258-.906 0-1.826-.19-2.677-.528v-3.38c.121.068.23.122.23.122.567.27 1.176.42 1.784.42.595 0 1.109-.136 1.514-.393.433-.27.69-.662.744-1.122a3.187 3.187 0 0 1-2.055.757 3.182 3.182 0 0 1-3.177-3.177v-6.342h3.812v5.07c0 .488.555.853 1.069.488a.482.482 0 0 0 .202-.406v-5.152h-.013ZM6.8 17.71c0 1.027.324 1.933.946 2.623.04.04.135.148.135.148s-.108.068-.162.095a3.276 3.276 0 0 1-1.393.311C4.717 20.887 3 19.697 3 17.074V7.556h3.8V17.71Zm20.929-2.529v.636c0 .69.554 1.27 1.27 1.27v3.814h-.161c-1.312-.041-2.542-.555-3.448-1.46-.947-.947-1.46-2.232-1.46-3.61v-3.489c0-.92-.987-1.623-1.974-1.082a1.141 1.141 0 0 0-.568.987v1.041h1.582v3.786h-1.582a3.78 3.78 0 0 1-1.068 2.637 3.732 3.732 0 0 1-2.583 1.162h-.148v-8.64c0-1.879 1.433-3.988 3.19-4.637 3.164-1.176 6.301.784 6.869 3.772H29v3.813h-1.271Z"></path>
          </svg>
        </button>
      </div>
      <button
        className="text-white text-2xl xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖️" : "☰"}
      </button>

      <div
        className={`${
          isOpen ? " h-full block" : "hidden"
        } xl:flex flex flex-col xl:flex-row xl:justify-items-center w-full xl:w-auto mt-4 xl:mt-0`}
      >
        {/* <button
          // onClick={() => scrollToSection("skills")}
          className="text-white text-lg sm:text-xl hover:bg-purple-800 px-5 rounded-sm shadow-md "
        >
          Skills
        </button> */}

        <button className="border-x border-b  font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition ">
          Hover me!
        </button>
        <button className="border-x  border-b font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition ">
          Hover me!
        </button>
        <button className="border-x  border-b font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] hover:text-purple-600 transition ">
          SignUp to Park
        </button>
        <button className="border-l  border-b font-bold  text-sm cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0rem_0.5rem_#9333ea] transition">
          Registor
        </button>
        {/* <button className="relative  bg-white isolation-auto z-10 border-x before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-purple-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3  text-black  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Button
        </button> */}
      </div>
    </div>
  );
};
export default Navbar;