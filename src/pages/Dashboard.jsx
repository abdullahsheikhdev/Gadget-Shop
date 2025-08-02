const Dashboard = () => {
  return (
    <div>
      <div className="bg-purple-500">
        <div className="container mx-auto text-center p-5">
          <h1 className="text-4xl text-white font-bold">Dashboard</h1>
          <p className="mt-5 text-white font-normal max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="space-x-5 my-10">
            <button className="py-2 px-14 cursor-pointer rounded-2xl font-extrabold bg-white text-[#9538E2]">Cart</button>
            <button className="py-2 px-10 cursor-pointer rounded-2xl border border-white text-white bg-[#9538E2]">Whishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
