import "./Home.css";
import backPic from "../assets/fullLogoWshadow.png"

const Home = () => {
  return (
    <div className="Home">

      <img className="home-img" src={backPic} alt="Back Pic" />

      <div className="home-container">

        <h2>-You Donate A Coat, Someone Gets A Coat!</h2>
        <br />
        <h1>
          Welcome To The COAT 2 COAT App!
        </h1>
      </div>
    </div>
  );
}

export default Home;