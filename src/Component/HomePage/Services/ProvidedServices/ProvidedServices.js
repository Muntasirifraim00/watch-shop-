import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import '../services.css';

const ProvidedServices = (props) => {
    const { id, name, description, price, img, image} = props.service;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleService = (id, name, description, price, img, image) => {
        const newUser = {...loggedInUser};
        newUser.serviceId = id;
        newUser.serviceName = name;
        newUser.setPrice = price;
        newUser.serviceDescription = description;
        newUser.serviceImg = img;
        newUser.serviceImage = image;
        setLoggedInUser(newUser);
    }

    return (
        <div onClick={ () => handleService(id, name , price, description, img, image)} className='col-md-4 text-center service-card'>

            <div className='p-3 my-3 roundedp '>
                {
                    image ? <img className="service-logo" src={`data:image/jpeg;base64,${image.img}`} alt="" srcSet="" />
                    : <img src={img} className="service-logo" alt="" srcSet=""/>
                }
                
                <h4>{name}</h4>
                <small>{description}</small>
                <h2>${price}</h2>
                <button type="button" class="btn btn-warning">Order Now</button>

            </div>
            
        </div>
    );
};

export default ProvidedServices;