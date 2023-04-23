/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

import { GlobalContext } from "../../context/GlobalContext";

import Layout from "../../components/Layout";

import { Link, useParams } from "react-router-dom";
import ic_arrow from "../../assets/ic_arrow-left-normal.svg";
import ic_play from "../../assets/ic_play.svg";
import ic_star from "../../assets/ic_star.svg";

function Detail() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { getMovies } = handleFunction;

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const handleDetail = () => {
    const filter = data
      .filter((val) => val.show.id == id)
      .map((item) => {
        return item;
      });

    setMovie(...filter);
  };

  useEffect(() => {
    getMovies();
    handleDetail();
  }, [id]);

  return (
    <Layout>
      <div className="flex gap-14 items-start mt-10">
        <Link to="/">
          <img src={ic_arrow} alt="" />
        </Link>
        <div className="flex flex-col gap-10">
          {/* Thumbnail */}
          <div className="w-full relative group">
            <div className="overflow-hidden w-full h-[600px] rounded-[30px]">
              <img
                src={movie?.show?.image?.original}
                className="object-cover w-full"
                alt=""
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <img src={ic_play} width="80" alt="" />
            </div>
            <a href="#" className="inset-0 absolute z-50"></a>
          </div>

          {/* Judul & Rating */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium text-[28px] capitalize">
                {movie?.show?.name}
              </div>
              <p className="text-gray-400 text-base mt-[6px]">
                Released at {movie?.show?.premiered}
              </p>
            </div>
            <div className="inline-flex items-center gap-[6px]">
              <img src={ic_star} alt="" />
              <img src={ic_star} alt="" />
              <img src={ic_star} alt="" />
              <img src={ic_star} alt="" />
              <img src={ic_star} alt="" />
            </div>
          </div>

          {/* Desctription */}
          <div>
            <div className="text-xl text-white">Description</div>
            <div className="max-w-[700px] mt-[10px] text-gray-400 text-base leading-8">
              {ReactHtmlParser(movie?.show?.summary)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Detail;
