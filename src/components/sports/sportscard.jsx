export default function Sportscard() {
    return (
      <>
        <div className="z-40 ">
          <img src="./src/assets/sports/cover.webp" className="h-full ml-28" />
          <div class="max-w-md md: absolute top-6 left-32">
            <a href="#"></a>
            <a href="#">
              <img
                src="./src/assets/sports/title.webp"
                className=" sm:justify-center"
              />
            </a>
            <div class="lg:py-5 md:py-0">
              <a href="#"></a>
              <p className="mb-3  text-white md:font-bold md:text-base text-xs flex flex-row">
                ICC Men's T20 world Cup 2024 &bull; 15min &bull; Cricket 
              </p>
            </div>
            <div className="m-0 hidden md:block">
              <p className="text-white lg:font-medium md:hidden lg:block  text-xs md:text-base">
              India showed immense grit to clinch a sublime seven-run victory against South Africa to lift their second ICC Men's T20 World Cup title
              </p>
            </div>
           
            <div className="flex flex-row space-x-6">
              <div className="lg:my-5 font-bold md:m-0">
                <button
                  type="button"
                  class="md:px-24 md:py-3.5 px-5 py-1 text-black rounded-lg text-center bg-white lg:text-base text-xs"
                >
                  Subscribe to Watch
                </button>
              </div>
              <div className="md:my-0 md:mt-3 lg:mt-9 lg:my-5">
                <a
                  href=""
                  className="items-center md:px-8  md:py-3.5 text-md font-semibold text-center text-white rounded-lg  dark:bg-gray-600 opacity-60"
                >
                  +
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  