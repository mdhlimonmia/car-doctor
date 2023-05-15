import { HiArrowSmallRight } from "react-icons/hi2";

const ServicesCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body items- text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center text-[#FF3811] font-bold">
          <div>
            <p>Price: ${price} </p>
          </div>
          <div className="card-actions">
            <HiArrowSmallRight></HiArrowSmallRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
