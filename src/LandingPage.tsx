import Footer from "./Footer";
const LandingPage = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex items-center ">
          <div className="px-4 py-2  bg-black text-white w-full ">
            <p className="animate-marquee font-bold text-nowrap">
              We're building our MVP! The product is in development and not yet
              functional, but stay tuned – launching soon!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap-reverse lg:flex-nowrap xl:px-20 xl:py-20 px-4 py-4 ">
        <img
          className="lg:w-1/2 w-full"
          src="https://www.neighbor.com/storage-blog/wp-content/uploads/2024/05/AdobeStock_391893703-1024x576.jpeg"
          alt=""
        />
        <div className="xl:px-32 xl:py-24 px-5 py-4">
          <h1 className="lg:text-7xl text-5xl font-semibold">Let's park</h1>
          <div className="flex flex-row mt-10 gap-4">
            <button className="cursor-pointer lg:text-base text-sm uppercase border-white h-14 text-white  bg-purple-600 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#c084fc] transition">
              Sign up to Park
            </button>
            <button className="cursor-pointer lg:text-base text-sm uppercase border-2 h-14   bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#c084fc] transition">
              Become a Parking Lessor
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap-reverse lg:flex-nowrap bg-purple-50 xl:px-60 xl:py-20 px-4 py-2">
        <div className="flex flex-col pr-28">
          <p className="text-base font-bold">PARK YOUR VEHICAL</p>
          <h1 className="text-4xl font-semibold py-2">
            Parking made easier. Park your car Safely.
          </h1>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-lightning-bolt"
            >
              <path d="M24.25 13.6h-6.6V3l-9.9 15.3h6.6V29l9.9-15.4Zm-13.6 3.1 5.4-8.3v6.8h5.3l-5.4 8.4v-6.9h-5.3Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Park any where:</p>
              <p className="py-1">
                Park anywhere no now need to worry if your hostal does not offer
                parking.
              </p>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-cash"
            >
              <path d="M3 6.37v15.558h26V6.37H3Zm24.405 10.563a4.235 4.235 0 0 0-3.37 3.37H7.965a4.235 4.235 0 0 0-3.37-3.37v-5.598a4.235 4.235 0 0 0 3.37-3.37h16.07a4.235 4.235 0 0 0 3.37 3.37v5.598Zm1.535 7.101H3.03v1.595h25.91v-1.595Z"></path>
              <path d="M16 18.106a3.972 3.972 0 1 0 0-7.944 3.972 3.972 0 0 0 0 7.944Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Park cheaply:</p>
              <p className="py-1">Enjoy safe parking at very low price.</p>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-clock-dash"
            >
              <path d="M24.351 6.027a13.025 13.025 0 0 0-3.987-2.282l-.544 1.533a11.331 11.331 0 0 1 3.489 1.996l1.042-1.247Zm3.912 5.621a12.927 12.927 0 0 0-2.28-3.99l-1.248 1.045a11.337 11.337 0 0 1 1.998 3.489l1.53-.544Z"></path>
              <path d="m28.84 13.884-1.605.264a11.392 11.392 0 0 1-11.225 13.23A11.39 11.39 0 0 1 4.636 16 11.39 11.39 0 0 1 17.865 4.774l.263-1.603A13.012 13.012 0 0 0 3 16a13.015 13.015 0 0 0 12.998 13A13.012 13.012 0 0 0 29 16c.003-.708-.05-1.416-.16-2.116Z"></path>
              <path d="M14.995 8.501v8.513h6.543v-2.031h-4.511V8.5h-2.032Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Park any time:</p>
              <p className="py-1">Park any time now.</p>
            </div>
          </div>
          <button className="cursor-pointer uppercase border-2 h-14   bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#c084fc] transition">
            Find Parking Spot
          </button>
        </div>
        <img
          className="lg:w-2/5 md:w-1/2 w-full"
          src="https://images.ctfassets.net/q8mvene1wzq4/2qig3wGIPssGl5C9tS0Lrt/f68bb064f872385abc6e95606cb0794e/home_pinkpaint_driver.jpg?w=1500&q=60&fm=webp"
          alt=""
        />
      </div>
      <div className="flex flex-row flex-wrap-reverse lg:flex-nowrap xl:px-20 xl:py-20 px-4 py-4 ">
        <div className="flex flex-col pr-28">
          <p className="text-base font-bold">Rent your Parking Space</p>
          <h1 className="text-4xl font-semibold py-2">
            Made your empty garage, courtyard or any safe place a passive income
          </h1>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-lightning-bolt"
            >
              <path d="M24.25 13.6h-6.6V3l-9.9 15.3h6.6V29l9.9-15.4Zm-13.6 3.1 5.4-8.3v6.8h5.3l-5.4 8.4v-6.9h-5.3Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Offer parking when you want</p>
              <p className="py-1">Offer parking to earn when you want.</p>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-cash"
            >
              <path d="M3 6.37v15.558h26V6.37H3Zm24.405 10.563a4.235 4.235 0 0 0-3.37 3.37H7.965a4.235 4.235 0 0 0-3.37-3.37v-5.598a4.235 4.235 0 0 0 3.37-3.37h16.07a4.235 4.235 0 0 0 3.37 3.37v5.598Zm1.535 7.101H3.03v1.595h25.91v-1.595Z"></path>
              <path d="M16 18.106a3.972 3.972 0 1 0 0-7.944 3.972 3.972 0 0 0 0 7.944Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Make your Earning</p>
              <p className="py-1">
                Earn from your garage or anyother safe place.
              </p>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              data-testid="core-ui-icon-clock-dash"
            >
              <path d="M24.351 6.027a13.025 13.025 0 0 0-3.987-2.282l-.544 1.533a11.331 11.331 0 0 1 3.489 1.996l1.042-1.247Zm3.912 5.621a12.927 12.927 0 0 0-2.28-3.99l-1.248 1.045a11.337 11.337 0 0 1 1.998 3.489l1.53-.544Z"></path>
              <path d="m28.84 13.884-1.605.264a11.392 11.392 0 0 1-11.225 13.23A11.39 11.39 0 0 1 4.636 16 11.39 11.39 0 0 1 17.865 4.774l.263-1.603A13.012 13.012 0 0 0 3 16a13.015 13.015 0 0 0 12.998 13A13.012 13.012 0 0 0 29 16c.003-.708-.05-1.416-.16-2.116Z"></path>
              <path d="M14.995 8.501v8.513h6.543v-2.031h-4.511V8.5h-2.032Z"></path>
            </svg>
            <div className="pl-2">
              <p className="font-semibold">Park any time:</p>
              <p className="py-1">Park any time now.</p>
            </div>
          </div>
          <button className="cursor-pointer uppercase border-2 h-14   bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#c084fc] transition">
            List your parking
          </button>
        </div>
        <img
          className="lg:w-2/5 md:w-1/2 w-full"
          src="https://inspiredclosetsmediafiles.s3.amazonaws.com/wp-content/uploads/2023/07/23095513/garage_stall.webp"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
};
export default LandingPage;
