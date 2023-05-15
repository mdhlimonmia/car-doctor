import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutAs = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content p-0 flex-col lg:flex-row gap-40">
        <div className="relative">
          <img src={person} className="w-[1000px] h-[400px] rounded-lg shadow-2xl" />
          <img src={parts}  className="absolute w-[300px] rounded-lg border-8 border-white top-60 left-52" alt="" />
        </div>
        <div className="pr-20">
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutAs;
