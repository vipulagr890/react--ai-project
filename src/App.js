import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            particles: {
              color: {
                value: "rgba(252, 176, 69, 1)",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
          }}
        />
        <Navigation />
        <hr className="navbar-line" />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/signin" element={<Sig />}></Route> */}
        </Routes>

        {/*
      <ImageLinkForm />
      <FaceRecognition /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
