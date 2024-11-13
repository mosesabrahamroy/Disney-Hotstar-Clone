export default function Main() {
  return (
    <>
      <div className="z-0">
        <img src="./src/assets/avengers.webp" className="h-full" />
        <div class="max-w-md md: absolute top-6 left-28">
          <a href="#"></a>
          <a href="#">
            <img
              src="./src/assets/avengerslogo.webp"
              className="lg:w-full sm:justify-center"
            />
          </a>
          <div class="lg:py-5 md:py-0">
            <a href="#"></a>
            <p className="mb-3  text-white md:font-bold md:text-base text-xs flex flex-row">
              2019 &bull; 3h 1m  &bull; 4 Languages  &bull;
              <a
                href="#"
                class=" w-32 hidden md:block items-center px-3 py-2 text-sm font-bold ms-2 text-center text-white rounded-lg  dark:bg-gray-600 opacity-60 md:text-sm "
              >
                U/A 13+
              </a>
            </p>
          </div>
          <div className="m-0 hidden md:block">
            <p className="text-white lg:font-medium md:hidden lg:block  text-xs md:text-base">
              After the devastating of the infinity war, the avengers assemble
              once more to reverese Thano's action and Restore Balance to the
              universe.
            </p>
          </div>
          <div className="lg:my-5 md:m-0 md:hidden lg:block hidden m-4">
            <p className="text-white font-bold">
              SuperHero | Action | Dark Humour | Alien
            </p>
          </div>
          <div className="text-white my-5 space-x-4 space-y-2 font-bold md:text-sm lg:text-base md:block hidden">
            <a
              href=""
              className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white rounded-lg  dark:bg-gray-600 opacity-60"
            >
              Hindi
            </a>
            <a href="">Tamil</a>
            <a href="">Telugu</a>
            <a href="">English</a>
            <a href="">Original</a>
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
