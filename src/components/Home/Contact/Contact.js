import React from 'react';

const Contact = () => {
    return (
       <section id="contact" className="contact py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-brand text-uppercase">Contact</h5>
                    <h1 className="text-gradient">Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="input" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="input" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="input" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button style={{width: "150px"}} type="button" className="btn-brand mx-auto">Submit</button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;