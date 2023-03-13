import React, { useState } from "react";
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact(){

    const [values, setValues] = useState({subject:"", body:""});
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setValues((values)=>({...values,[name]:value}))
    }
    
    const email ='anusharma03.as@gmail.com';
console.log(values);

    return(
        <div>
            <section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="col-lg-5 col-md-12">
							<div className="single-contact-box">
								<div className="contact-form">
									<form>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
												  <input type="text" className="form-control" id="name" placeholder="Name*" name="name" required/>
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input type="email" className="form-control" id="email" placeholder="Email*" name="email" required/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input type="text" className="form-control" id="subject" placeholder="Subject*" name="subject" onChange={handleChange} required/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea className="form-control" rows="8" id="comment" placeholder="Message*" name="body" onChange={handleChange} required></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<a className="contact-btn" href={`mailto:${email}?subject=${values.subject || ''}&body=${values.body || ''}`}>submit</a>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-lg-5 col-md-12">
							<div className="single-contact-box">
								<div className="contact-adress">
									<div className="contact-add-head">
										<h3>anita sharma</h3>
										<p>junior frontend software developer</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p>+1(647)-513-3077</p>
										</div>
										<div className="single-contact-add-info">
											<h3>email</h3>
											<p>anusharma03.as@gmail.com</p>
										</div>
									</div>
								</div>
									<ul className="hm-foot-icon">
										<li><a href="https://www.linkedin.com/in/anita-sharma-03/">											
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faLinkedinIn} style={{color: '#6a708e;', fontSize: '18px'}}/>
											</a></li>
											<li>
											<a href="https://github.com/anitasharma03">
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faGithub} style={{color: '#6a708e;', fontSize: '18px'}}/>
											</a>
										</li>									
										<li>
											<a href="https://www.instagram.com/anusharma0313/">
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faInstagram} style={{color: '#6a708e;', fontSize: '18px'}}/>
											</a>
										</li>
									</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>

        </div>
    );
}

export default Contact;