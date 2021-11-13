import React from 'react';

const ContactSection = () => {
    const backgroundStyle = {
        backgroundColor : "#FBD062"
    }
    return (
        <section style={backgroundStyle} className="row">
            <div className="col-md-5 offset-md-1">
                <div className="py-5 m-2">
                    <h2 className="my-4">Let us Show You <br/>Some Watches</h2>
                  
                </div>
            </div>
            <div className="col-md-6">
                <form action="" className="py-5 m-2">
                    <div class="form-group">
                        <input type="email" className="form-control" placeholder="Your Email Address" />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control" placeholder="Your name/company's name" />
                    </div>
                    <div className="form-group">
                        <textarea class="form-control" rows="5" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark px-4">Send</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;