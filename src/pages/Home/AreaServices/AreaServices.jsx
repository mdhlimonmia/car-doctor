import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const AreaServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div>
            <div className="text-center space-y-5 my-20">
                <p className="text-xl font-bold text-[#FF3811]">Services</p>
                <h1 className="text-5xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-20"> 
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service ={service}
                    ></ServicesCard> )
                }
            </div>
        </div>
    );
};

export default AreaServices;