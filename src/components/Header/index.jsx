import React, { useState } from 'react';
import '../styles.css';


function Header(){
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
return(

    <header className="top-area">
			<div id="sticky-wrapper" className="sticky-wrapper" >
                <div className="header-area">	
			    <nav className="navbar navbar-expand-lg bg-body-tertiary bootsnav navbar-fixed dark on no-full no-background">
			        <div className="container p-0">            
			            <div className="navbar-header">
                        <button className="navbar-toggler" onClick={() => setIsNavCollapsed(!isNavCollapsed)} type="button" data-toggle="collapse" data-target="navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
			            <a className="navbar-brand" href="#">anita</a>
			            </div>
			            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#aboutMe">about me</a></li>
			                    <li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#education">education</a></li>
			                    <li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#skills">skills</a></li>
			                    <li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#experience">experience</a></li>
			                    <li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#portfolio">portfolio</a></li>
			                    <li className="nav-item"><a onClick={() => setIsNavCollapsed(!isNavCollapsed)} href="#contact">contact</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			 
			</div>
        </div>

	</header>
);
}

export default Header;