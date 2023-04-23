/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import { Link } from "react-router-dom";
import ic_play from "../../assets/ic_play.svg";

function Featured() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { getMovies } = handleFunction;

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="my-10">
      <div className="font-semibold text-[22px] text-white mb-[18px]">
        Featured
      </div>
      <div className="grid grid-cols-2 gap-5 xl:gap-12">
        {data.length > 0 &&
          data
            .filter((item, index) => index > 5 && index < 8)
            .map((item) => {
              return (
                <div
                  className="col-span-1 relative overflow-hidden group max-h-[400px] rounded-[30px]"
                  key={item?.show?.id}
                >
                  <img
                    src={item?.show?.image?.original}
                    className="object-cover rounded-[30px]"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                    <div className="px-7 pb-7">
                      <div className="font-medium text-xl text-white">
                        {item?.show?.name}
                      </div>
                      <p className="mb-0 text-gray-400 text-base mt-[10px]">
                        {item?.show?.premiered}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500">
                    <img src={ic_play} className="" width="80" alt="" />
                  </div>
                  <Link
                    to={`detail/${item?.show?.id}`}
                    className="inset-0 absolute z-50"
                  ></Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Featured;
