import NavbarLayout from "../components/Layouts/NavbarLayout";

const HomePage = () => {
  return (
    <div className="container">
      <NavbarLayout />
      <div className="md:flex md:justify-around items-center mt-36">
        <div>
            <h4 className="text-2xl font-medium">Hai semuanyaa...</h4>
            <h6 className="text-xl text-slate-800">Saya</h6>
            <h1 className="text-5xl font-bold text-blue-500 my-2">M Dzaki Ardiansyah</h1>
            <h3 className="font-medium mt-2">Junior web developer</h3>
        </div>
        <div>
            <img src="vite.svg" alt="Logo vite" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
