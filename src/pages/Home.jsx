import ActivityCarousel from "../components/ActivityCarousel";

const Home = () => {
  return (
    <section className="h-[calc(100vh-50px)] w-screen bg-[#00040f]">
      <div className="mx-auto flex h-full w-[90%] items-center justify-center bg-[#00040f] text-white">
        <div className="w-[50]% flex flex-col text-3xl">
          <p>
            Welcome to <span className="text-[#5CE1E6]">SportsActivities</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            dolores minima voluptatem eveniet aspernatur delectus rem saepe
            obcaecati nobis vel tempore natus beatae assumenda debitis tempora
            illum dignissimos esse dolor!
          </p>
        </div>

        <div className="w-[50%] text-white">
          <ActivityCarousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
