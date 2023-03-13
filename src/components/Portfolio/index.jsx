import React from "react";
import '../styles.css';
import image1 from '../../Assets/matchGame.png';
import image2 from '../../Assets/quoteMachine.png';
import image3 from '../../Assets/monster.png';
import image4 from '../../Assets/todoApp.png';
import image5 from '../../Assets/shopMe.png';


// const appSets = [
// 	{
// 	  id: 1,
// 	  image: image1,
// 	  appLink: "https://anitasharma03.github.io/MatchGame/",
// 	  appName: "Javascript Match Game"
// 	},
// 	{
// 		id: 2,
// 		image: image2,
// 		appLink: "https://anitasharma03.github.io/QuoteMachine/",
// 		appName: "Donald's Quote Machine"
// 	  },
// 	  {
// 		id: 3,
// 		image: image3,
// 		appLink: "https://anitasharma03.github.io/Todo-App/",
// 		appName: "Todo Tracker App"
// 	  }
//   ];

function Portfolio(){
	return(
		<section id="portfolio" class="portfolio">
			<div class="portfolio-details">
				<div class="section-heading text-center">
					<h2>portfolio</h2>
				</div>
				<div class="container">
					<div class="portfolio-content mt-4">
						<div class="isotope">
							<div class="row">

								<div class="col-lg-4 col-sm-12">
									<div class="item">
										<img src= {image1} alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="https://anitasharma03.github.io/MatchGame/">
											Cards Matching Game
											</a>
										</div>
									</div>								
									<div class="item">
										<img src={image2} alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="https://anitasharma03.github.io/QuoteMachine/">
											Donald's Quote Machine
											</a>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-sm-12">
									<div class="item" id= "main-item">
										<img src={image3} alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="https://anitasharma03.github.io/MonsterRolodex/">
												React, Search for Monster
											</a>
										</div>
									</div>
								</div>

								<div class="col-lg-4 col-sm-12">
									<div class="item">
										<img src={image4} alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="https://anitasharma03.github.io/Todo-App/">
											Todo Tracking App
											</a>
										</div>
									</div>
									<div class="item">
										<img src={image5} alt="portfolio image"/>
										<div class="isotope-overlay">
											<a href="https://anitasharma03.github.io/shoppingApp/">
												Shop with SHOPMe
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}




export default Portfolio;