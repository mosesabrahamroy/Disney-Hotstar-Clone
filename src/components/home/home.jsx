import Main from "./card";
import Navbar from "./navbar";
import Latestrelease from "./latestrelease";
import Bestinsports from "./bestinsports";
import Popularshows from "./popularshows";
import Friendshipdayfavourites from "./friendshipdayfavourites";
import Hotstarspecials from "./hotstarspecials";
import Footer from "./footer";

export default function Home() {
  return (
    <>
    <div className="bg-black">
      <Navbar />
      <Main />
      <Latestrelease />
      <Bestinsports />
      <Popularshows />
      <Friendshipdayfavourites />
      <Hotstarspecials />
      <Footer />
      </div>
    </>
  );
}

