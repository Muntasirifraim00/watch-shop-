import React, { useState } from 'react';

import Feedback from './Feedback/Feedback';
import './ClientFeedback.css';
import { useEffect } from 'react';

const ClientFeedback = () => {

    const [customerReview, setCustomerReview] = useState([])

    useEffect(() => {
        fetch("https://sleepy-reaches-72438.herokuapp.com/customerReview")
            .then(res => res.json())
            .then(data => setCustomerReview(data));
    }, []);



    const feedbackItem = [
        // {
        //     _id: 1,
        //     customerName: "Ema Watson",
        //     customerProfession: 'CEO, Hollywood Film Industry',
        //     customerImg: customer1,
        //     customerComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // },
        // {
        //     _id: 2,
        //     customerName: "Patrick Johnson",
        //     customerProfession: 'CEO, British E-learning School',
        //     customerImg: customer2,
        //     customerComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // },
        // {
        //     _id: 3,
        //     customerName: "Jim Morrison",
        //     customerProfession: "GS, World Health Association",
        //     customerImg: customer3,
        //     customerComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex excepturi nobis, beatae cumque aspernatur."
        // }
    ];

    const feedbacks = feedbackItem.concat(customerReview);

    return (
        <div className="my-5 p-5">
            <h3 className='text-center my-5'>User <span className='text-success'>Revview</span></h3>
            <div className='row'>
                {
                    feedbacks.map(feedback => <Feedback key={feedback._id} clientFeedback={feedback}></Feedback>)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;