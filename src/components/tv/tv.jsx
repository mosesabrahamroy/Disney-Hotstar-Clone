import Tvcard from "./tvcard";
import Navbar from "../home/navbar";
import Starvijayshows from "./starvijayshows";
import Hardlyworking from "./hardlyworking";
import Popularshows from "../home/popularshows";
import Actionshows from "./actionshows";
import Natgeoshows from "./natgeoshows";
import Popularchannels from "./popularchannels";
import Footer from "../home/footer";
export default function Tv() {
  return (
    <>
    <div className="bg-black">
        <Navbar />
        <Tvcard />
        <Starvijayshows />
        <Hardlyworking />
        <Popularshows />
        <Actionshows />
        <Natgeoshows />
        <Popularchannels />
        <Footer />
      </div>
    </>
  );
}
