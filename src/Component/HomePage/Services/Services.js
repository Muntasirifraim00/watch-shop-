import React, { useEffect } from 'react';
import ProvidedServices from './ProvidedServices/ProvidedServices';
import webDesign from '../../../images/icons/service1.png';
import webDevelopment from '../../../images/icons/service2.png';
import graphicDesign from '../../../images/icons/service3.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Services = () => {

    const [serviceProvides, setServiceProvides] = useState([]);

    useEffect(() => {
        fetch("https://sleepy-reaches-72438.herokuapp.com/serviceProvides")
            .then(res => res.json())
            .then(data => setServiceProvides(data));
    }, []);

    const serviceItem = [
        // {
        //     _id: 1,
        //     name: "Web & Mobile Design",
        //     img: webDesign,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // },
        // {
        //     _id: 2,
        //     name: "Graphic Design",
        //     img: graphicDesign,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // },
        // {
        //     _id: 3,
        //     name: "Web Development",
        //     img: webDevelopment,
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // }
    ];

    const services = serviceItem.concat(serviceProvides);
    return (
        <div className="">
            <h3 className='text-center my-5'>Our <span className='text-success'>services</span></h3>
            <Link style={{ textDecoration: "none" }} className="text-dark" to="/customer/placeOrder"><div className='row p-2'>
                {
                    services.map(service => <ProvidedServices key={service._id} service={service}></ProvidedServices>)
                }
            </div></Link>
        </div>
    );
};

export default Services;