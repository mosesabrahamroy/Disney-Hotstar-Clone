import Navbar from "../home/navbar";
import Footer from "../home/footer";
import Comedymovies from "./comedymovies";
import Thrillermovies from "./thrillermovies";
import Documentarymovies from "./documentarymovies";
import Disneymusicalmovies from "./disneymusicalmovies";
import Marvelmovies from "./marvelmovies";
import Moviescard from "./moviescard";
export default function Movies() {
  return (
    <>
    <div className="bg-black">
        <Navbar />
        <Moviescard />
        <Comedymovies />
        <Thrillermovies />
        <Documentarymovies />
        <Disneymusicalmovies />
        <Marvelmovies />
        <Footer />
      </div>
    </>
  );
}
