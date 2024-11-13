import Navbar from "../home/navbar";
import Indiafinal from "./indiasFamous";
import Manunited from "./manunited";
import Popularsports from "./popularsports";
import Populartournaments from "./populartournaments";
import Premierleague from "./premierleague";
import Sportscard from "./sportscard";
import Footer from "../home/footer";

export default function Sports() {
  return (
    <>
    <div className="bg-black">
        <Navbar />
        <Sportscard />
        <Popularsports />
        <Manunited />
        <Premierleague />
        <Populartournaments />
        <Indiafinal />
        <Footer />
      
        
      </div>
    </>
  );
}
