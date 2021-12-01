import heroImage from "./images/hero.svg";
import "./Hero.scss";

function Hero() {
  return (
    <div className="col d-flex flex-column justify-content-evenly Hero">
      <div className="row">
        <h1 className="Hero-title text-center p-0 m-0">
          <span className="text-blue">MeVerse Game</span>
        </h1>
      </div>
      <div className="row">
        <img src={heroImage} className="img-fluid" alt="Ooops.." />
      </div>
      <div className="row">
        <blockquote className="blockquote text-center">
          <p className="fs-1">
            In a MetaVerse where you can be anything,
            <br /> be <span className="text-blue"> yourself</span>!
          </p>
          <footer className="blockquote-footer fs-4">
            Some metaphysician 420 B.C.
          </footer>
        </blockquote>
      </div>
      <div className="d-flex pb-5">
        <a
          href="https://discord.gg/gT8gtSPkTc"
          target="_blank"
          rel="noreferrer"
          className="px-4 Hero-join-button mx-auto"
        >
          <i className="bi bi-discord" />
          &nbsp; Join us on Discord
        </a>
      </div>
    </div>
  );
}

export default Hero;
