import { Link } from "react-router-dom";
import ic_play from "../../assets/ic_play.svg";

function Movie({ data }) {
  return (
    <div className="relative group overflow-hidden h-[300px] w-[240px] md:1/2 lg:w-[23%] px-4 md:px-0">
      <img
        src={data?.show?.image?.original}
        className="object-cover rounded-[30px] w-full h-full"
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
        <div className="px-10 pb-7">
          <div className="font-medium text-xl text-white">
            {data?.show?.name}
          </div>
          <p className="mb-0 text-gray-400 text-base mt-[10px]">
            {data?.show?.premiered}
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500">
        <img src={ic_play} className="" width="80" alt="" />
      </div>
      <Link
        to={`detail/${data?.show?.id}`}
        className="inset-0 absolute z-50"
      ></Link>
    </div>
  );
}

export default Movie;
