import { ParticlesApp } from "../particles/ParticlesApp";

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen Roboto relative">
        <div className="h-screen absolute">
          <ParticlesApp />
        </div>
        <div className="flex flex-col items-start text-white font-bold text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl">
          <div className="flex flex-col sm:flex-row">
            <h1 className="pr-2">Hi,</h1>
            <h1> My Name Is</h1>
          </div>
          <div className="text-teal-500 font-bold">
            Kealen Pillay.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
