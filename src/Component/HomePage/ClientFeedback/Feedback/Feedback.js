import React from 'react';
import '../ClientFeedback.css';
import defaultImg from '../../../../images/customer-3.png';

const Feedback = (props) => {
    const {customerName, customerProfession, customerImg, customerComment} = props.clientFeedback;
    return (
        <div className='col-md-6 col-lg-4'>

            <div className="customer-card p-2">
                <div className='text-center row'>
                    <div className='col-lg-3'>
                        {
                            customerImg ? <img src={customerImg} className="customer-logo" alt="" srcSet=""/>
                            : <img src={defaultImg} className="customer-logo" alt="" srcSet=""/>
                        }
                        
                    </div>
                    <div className='col-lg-8 d-flex flex-column justify-content-center'>
                        <h4>{customerName}</h4>
                        <h6>{customerProfession}</h6>
                    </div>
                </div>
                <div className="p-2">
                    <small className='text-left'>{customerComment}</small>
                </div>
            </div>
            
        </div>
    );
};

export default Feedback;