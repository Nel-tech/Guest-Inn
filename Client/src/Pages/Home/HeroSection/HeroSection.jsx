
import NavBar from '../../Components/Navbar';

function HeroSection() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <header>
        <NavBar />
      </header>

      <section
        id="home"
        className="relative flex h-screen items-center justify-center bg-[url('./assets/roomie.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-blue-400 sm:text-6xl md:text-7xl">
            Welcome to Buk Guest Inn
          </h1>
          <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
            Experience comfort and convenience like never before.
          </p>

          
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
