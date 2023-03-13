import React from 'react';
import '../styles.css';


function Experience(){
    return(
        <div>
            <section id="experience" className="experience">
			<div className="section-heading text-center">
				<h2>experience</h2>
			</div>
			<div className="container">
				<div className="experience-content">
						<div className="main-timeline">
							<ul>
								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-lg-5 col-md-12">
												<div className="experience-time job-experience">
													<h2>June 2022 - December 2022</h2>
													<h3>Junior software engineer</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-lg-5 col-md-12">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															MobileLive Inc. - Rogers
														</h4>
														<h5>Toronto, ON, Canada</h5>
														<p className="description">
                                                            I worked with Rogers which is the mobileLive client in the merchandising team where I mainly performed AB testing using core javascript for different devices to compare multiple versions of a single variable.														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="single-timeline-box fix">
										<div className="row">
											<div className="col-lg-5 col-md-12">
												<div className="experience-time job-experience">
													<h2>January 2022 - May 2022</h2>
													<h3>Junior software engineer (CO-OP)</h3>
												</div>
											</div>
											<div className="col-md-offset-1 col-lg-5 col-md-12">
												<div className="timeline">
													<div className="timeline-content">
														<h4 className="title">
															MobileLive Inc. - Telus
														</h4>
														<h5>Toronto, ON, Canada</h5>
														<p className="description">
                                                        worked with Telus on their Sales order form for Telus business tools that would take user information in multiple steps based on business size.	Main tech stack was react based along with contentful to map all the fields on the front end.													</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>


							</ul>
						</div>
					</div>
			</div>

		</section>
        </div>
    );
}

export default Experience;