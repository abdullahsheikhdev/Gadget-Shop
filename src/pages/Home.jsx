import { useNavigate } from "react-router-dom";

const Home = () => {
    const navaget = useNavigate();
  return (
    <>
      <div className="bg-[#9538E2] rounded-b-2xl mx-2">
        <div className="container mx-auto h-[750px]">
          <div className="text-center p-10">
            <h1 className="text-white text-6xl font-bold max-w-7xl mx-auto mb-8 mt-16">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white max-w-3xl mx-auto mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button onClick={() => navaget('/shop')} className="bg-white px-8 py-4 font-bold text-xl text-[#9538E2] cursor-pointer rounded-2xl">
              Shope Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="border-2 h-[710px] w-[1210px] border-white backdrop-blur-3xl p-5 -mt-60 rounded-2xl">
            <img
              className="h-[700px] w-[1200px] rounded-2xl"
              src="/src/assets/banner.jpg"
              alt="home"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
