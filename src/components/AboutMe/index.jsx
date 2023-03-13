import React from 'react';
import '../styles.css';
import profile from '../../Assets/profile-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../Assets/Resume.pdf';


function AboutMe(){
    return(

<div>
        <section id="welcome-hero" className="welcome-hero">
			<div className="container" >
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2>hi <span>,</span> i am <br/> anita sharma <span>.</span>  </h2>
							<p>junior frontend software developer</p>
							<a href={Resume} download={'Resume.pdf'} >download resume</a>
						</div>
					</div>
				</div>
			</div>

		</section>
		
		<section id="aboutMe" className="about">
			<div className="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row justify-content-between">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
								I am a junior frontend developer with a year of experience in React, JavaScript, and Contentful. I am passionate about designing and developing applications that not only look great but also provide a seamless user experience.								</h3>
								<p>
								Outside of my work in development, I also have a strong interest in the film industry, particularly in modeling. I love participating in photoshoots, runway walks, and commercials, and I find the creativity and artistry involved in these activities to be incredibly fulfilling.
                               <br/> When I'm not working on projects or modeling, I enjoy pursuing a variety of hobbies and interests. I am an avid cook and love experimenting with new recipes and techniques in the kitchen. I also enjoy playing racket sports like badminton and find the physical activity and aspect of these games to be a great way to stay active and engaged.
                               <br/>  Finally, I also enjoy thrill-seeking activities like riding roller coasters and taking adventurous trips, I love spending time with friends and family and enjoy fun and recreational activities like bowling and playing pool.</p>

								<div className="row">
									<div className="col-lg-4 col-sm-12">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>+1(647)-513-3077</p>
										</div>
									</div>
									<div className="col-lg-4 col-sm-12">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>anusharma03.as@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src={profile} alt="profile_image"/>
								<div className="about-list-icon">
									<ul>
									<li>
											<a href="https://www.linkedin.com/in/anita-sharma-03/">											
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faLinkedinIn} style={{color: 'white', fontSize: '16px'}}/>
											</a>
										</li>
										<li>
											<a href="https://github.com/anitasharma03">
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faGithub} style={{color: 'white', fontSize: '16px'}}/>
											</a>
										</li>									
										<li>
											<a href="https://www.instagram.com/anusharma0313/">
											<i aria-hidden="true"></i>
											<FontAwesomeIcon icon={faInstagram} style={{color: 'white', fontSize: '16px'}}/>
											</a>
										</li>	
                                       									
									</ul>
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


export default AboutMe;