import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


function Education(){
    return(
    <div>
        <section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-12">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>Sept 2020 - apr 2022</h2>
									<h3>computer software and database management</h3>
								</div>
								<div className="timeline-horizontal-border">
                                    <FontAwesomeIcon icon={faCircle} style={{color: '#d92cf9', fontSize: '10px'}}/>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											lambton college
										</h4>
										<h5>Toronto, ON, Canada</h5>
										<p className="description">
                                        This two-year program includes three tiers: front-end languages which include HTML5, CSS3, JavaScript, jQuery, Bootstrap; business logic uses server-side programming languages and frameworks such as C# .NET, Python, Node.js; database layer includes SQL and NoSQL DBMS, such as MySQL, and MongoDB. </p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>July 2016 - May 2019</h2>
									<h3>bachelor <span>of </span> computer applications</h3>
								</div>
								<div className="timeline-horizontal-border">
                                <FontAwesomeIcon icon={faCircle} style={{color: '#d92cf9', fontSize: '10px'}}/>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											panjab university
										</h4>
										<h5>chandigarh, India</h5>
										<p className="description">
                                        It is a 3-year undergraduate degree programme which maainly focuses on the basics of computer application and software development.This course includes database management systems, operating systems, software engineering, web technology and languages such as C, C++, HTML, Java etc.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
        </div>
    );
}


export default Education;
