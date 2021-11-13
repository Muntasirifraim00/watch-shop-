import React from 'react';
import frame from '../../../images/logos/frame.png';

const MainHeader = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-6">
                    <div className="my-5 mx-5">
                        <h2>BE THE BRAND <br /><br />With Expensive Watches</h2>
                       
                        <br /><br />
                     
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src={frame} alt="" className='img-fluid w-50 ' srcset="" />
                </div>
            </div>
            
        </div>
    );
};

export default MainHeader;