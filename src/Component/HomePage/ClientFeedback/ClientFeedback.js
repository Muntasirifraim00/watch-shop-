import React, { useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import Feedback from './Feedback/Feedback';
import './ClientFeedback.css';
import { useEffect } from 'react';

const ClientFeedback = () => {

    const [customerReview, setCustomerReview] = useState([])

    useEffect(() => {
        fetch("https://evening-coast-46137.herokuapp.com/customerReview")
        .then(res => res.json())
        .then( data => setCustomerReview(data));
    },[]);

    

    const feedbackItem = [
        {
            _id : 1,
            customerName : "Ema Watson",
            customerProfession: 'CEO, Hollywood Film Industry',
            customerImg : customer1,
            customerComment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        },
        {
            _id : 2,
            customerName : "Patrick Johnson",
            customerProfession: 'CEO, British E-learning School',
            customerImg : customer2,
            customerComment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        },
        {
            _id : 3,
            customerName : "Jim Morrison",
            customerProfession: "GS, World Health Association",
            customerImg : customer3,
            customerComment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        }
    ];

    const feedbacks = feedbackItem.concat(customerReview);

    return (
        <div className="my-5 p-5">
            <h3 className='text-center my-5'>Clients <span className='text-success'>Feedback</span></h3>
            <div className='row'>
                {
                    feedbacks.map( feedback => <Feedback key={feedback._id} clientFeedback={feedback}></Feedback>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;