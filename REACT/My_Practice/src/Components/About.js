import React from 'react'
import "./about.css"

const About = () => {
  return (
   <div>
     <div className="container">
        <nav id="header">   
            <div className="nav-logo"> 
                <p className="nav-name">Akshit Lathiya</p>
                <span>  </span>
            </div>
            <div className="nav-menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        <a href="#home" className="nav-link active-link">Home</a>               
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#about" className="nav-link">About</a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#projects" className="nav-link">Projects</a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#contact" className="nav-link">Contact</a>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
               <a href=''> <button className="btn" >Download CV <i className="uil uil-file-alt"></i></button></a>
            </div>
            <div className="nav-menu-btn">
                <i className="uil uil-bars" onclick="myMenuFunction()"></i>
            </div>
        </nav>
   </div>
   <main className="wrapper">
   <section className="featured-box" id="home"> 
                <div className="featured-text"> 
                    <div className="featured-text-card"> 
                        <span>Akshit Lathiya</span> 
                    </div> 
                    <div className="featured-name"> 
                        <p>I'm <span className="typedText"></span></p> 
                    </div>
                    <div className="featured-text-info">
                        <p> frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div> 
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                        <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                    </div>
                    {/* <div className="social_icons">
                        <div className="icon"><a href="https://www.instagram.com/akshit_lathiya/" <i
                                className="uil uil-instagram"></i><a></div>
                        <div className="icon"><a href="https://www.linkedin.com/in/akshit-lathiya-9a472524a/" <i
                                className="uil uil-linkedin-alt"></i></a></div>
                        <div className="icon"><a href="https://github.com/akshit8283" <i className="uil uil-github-alt"></i></a>
                        </div>
                    </div> */}
                </div>
                 
 
            </section>
            <section className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h3>My introduction</h3>
                            <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                                frameworks and libraries,which allows me to implement interactive features.
                                Additionally, I have experirence working with content management systems (CMS) like
                                WordPress.
                            </p>
                            <div className="about-btn">
                                <button className="btn">Download CV <i className="uil uil-import"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Programing Skills</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>jQuery</span>
                                <span>React</span>

                            </div>
                        </div>
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Additional Skills</h3>
                            </div>
                            <div className="skills-list">
                                <span>Communication Skills</span>
                                <span>Negotiation</span>
                                <span>Management Skills</span>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section" id="projects">
                <div className="top-header">                   
                    <h1>Projects</h1>
                </div>
                <div className="project-container">
                    <div className="project-box">
                        <i className="uil uil-briefcase-alt"></i>
                        <h3>Completed</h3>
                        <label>15+ Finished Projects</label>
                    </div> 
                    <div className="project-box">
                        <i className="uil uil-users-alt"></i>
                        <h3>Clients</h3>
                        <label>25+ Happy Clients</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-award"></i>
                        <h3>Experience</h3>
                        <label>7+ Years in the field</label>
                    </div>
                </div>
            </section>
                        
        </main>
        <footer>
            <div class="top-footer">
                <p>Akshit Lathiya .</p>
            </div> 
            <div class="middle-footer">
                <ul class="footer-menu">
                    <li class="footer_menu_list">
                        <a href="#home">Home</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#about">About</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <div class="footer-social-icons">
                <div class="icon"><a href="https://www.instagram.com/akshit_lathiya/" <i
                        class="uil uil-instagram"></i><a></div>
                <div class="icon"><a href="https://www.linkedin.com/in/akshit-lathiya-9a472524a/" <i
                        class="uil uil-linkedin-alt"></i></a></div>
                <div class="icon"><a href="https://github.com/akshit8283" <i class="uil uil-github-alt"></i></a></div>
            </div> */}
            <div class="bottom-footer">
                {/* <p>Copyright &copy; <a href="#home" style="text-decoration: none;">Akshit Lathiya</a> - All rights 
                    reserved
                </p> */}
            </div>
        </footer>
   </div>
    )
}

export default About 