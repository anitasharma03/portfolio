import React from 'react';
import '../styles.css';

const skillSet1 = [
	{
	  id: 1,
	  skill: "html",
	  percentage: 95
	},
	{
		id: 2,
		skill: "css",
		percentage: 90
	  },
	  {
		id: 3,
		skill: "javascript",
		percentage: 90
	  },
	  {
		id: 4,
		skill: "react",
		percentage: 85
	  },
	  {
		id: 5,
		skill: "redux",
		percentage: 83
	  }
  ];

const skillSet2 = [
	{
	  id: 101,
	  skill: "bootstrap",
	  percentage: 87
	},
	{
		id: 102,
		skill: "mysql",
		percentage: 80
	  },
	  {
		id: 103,
		skill: "jquery",
		percentage: 80
	  },
	  {
		id: 104,
		skill: "github-gh-pages",
		percentage: 85
	  },
	  {
		id: 105,
		skill: "interpersonal",
		percentage: 92
	  }
  ]; 
  
function Skills(){
	
	const skillSet1Content = skillSet1.map((skillSet1Item)=>
    <div key ={skillSet1Item.id} className="barWrapper">
		<span className="progressText">{skillSet1Item.skill}</span>
		<div className="single-progress-txt">
				<div className="progress ">
					<div className={`progress-bar ${skillSet1Item.skill}-bar`} role="progressbar"></div>
				</div>
				<h3>{skillSet1Item.percentage}%</h3>	
		</div>
    </div>
	);

	const skillSet2Content = skillSet2.map((skillSet2Item)=>
    <div key ={skillSet2Item.id} className="barWrapper">
		<span className="progressText">{skillSet2Item.skill}</span>
		<div className="single-progress-txt">
				<div className="progress ">
					<div className={`progress-bar ${skillSet2Item.skill}-bar`} role="progressbar"></div>
				</div>
				<h3>{skillSet2Item.percentage}%</h3>	
		</div>
    </div>
  );

    return(
        <div>
             <section id="skills" className="skills">
				<div className="skill-content">
					<div className="section-heading text-center">
						<h2>skills</h2>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="single-skill-content">
									<div >
									{skillSet1Content}
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-skill-content">
									<div>
									{skillSet2Content}
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

export default Skills;