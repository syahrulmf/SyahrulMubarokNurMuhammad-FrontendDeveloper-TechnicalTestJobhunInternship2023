/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import Featured from "../../components/Featured";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";

function Home() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { getMovies } = handleFunction;

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout>
      <Featured />

      <div>
        <div className="font-semibold text-[22px] text-white mb-[18px]">
          All Movies
        </div>

        <div className="flex flex-wrap gap-8">
          {data.length > 0 &&
            data.map((item) => <Movie data={item} key={item?.show?.id} />)}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
