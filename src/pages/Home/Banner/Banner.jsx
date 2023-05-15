import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  const bannerText = (
    <>
      <div className=" w-1/2 text-white space-y-7 ml-12">
        <h1 className="text-6xl font-bold">
          Affordable <br /> Price For Car Servicing
        </h1>
        <p className="text-lg">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-error mr-5">Discover More</button>
          <button className="btn btn-outline">Latest Project</button>
        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-xl " />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center h-full rounded-xl absolute">
          {bannerText}
        </div>
        <div className="absolute flex  bottom-2 gap-3 right-0 pr-7">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-xl " />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center h-full rounded-xl absolute">
          {bannerText}
        </div>
        <div className="absolute flex  bottom-2 gap-3 right-0 pr-7">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-xl " />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center h-full rounded-xl absolute">
          {bannerText}
        </div>
        <div className="absolute flex  bottom-2 gap-3 right-0 pr-7">
          {" "}
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-xl " />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center h-full rounded-xl absolute">
          {bannerText}
        </div>
        <div className="absolute flex  bottom-2 gap-3 right-0 pr-7">
          {" "}
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
