import Navbar from "../home/navbar";
import Popularchannels from "../tv/popularchannels";
import Populargenres from "./populargenres";
import Popularicons from "./popularicons";
import Popularlanguagcathegories from "./popularlanguages";
import Popularsports from "../sports/popularsports";
import Footer from "../home/footer";

export default function Cathegories() {
  return (
    <>
    <div className="bg-black">
        <Navbar />
        <Popularicons />
        <Popularlanguagcathegories />
        <Popularchannels />
        <Popularsports />
        <Populargenres />
        <Footer />

        
      </div>
    </>
  );
}
