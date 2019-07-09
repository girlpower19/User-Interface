import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import { Route } from 'react-router-dom'

class Landing extends React.Component{
    render() {
      return (
      
      <div>
        
        
       
        {/* Header */}
        <header id="header">
          <div className="container-fluid">
            <div id="logo" className="pull-left">
              <h1><a href="#intro" className="scrollto">Girl_Power</a></h1>
            </div>
            <AuthUserContext.Consumer>
              {
                    authuser=>authuser?<nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#services">Services</a></li>
                      <li>
                        <Link><SignOutButton/></Link>
                      </li>
                    </ul>
                  </nav>:<nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#services">Services</a></li>
                      <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
                      <li className="menu-active"><Link to={ROUTES.SIGN_UP}>Sign Up</Link></li>
                    </ul>
                  </nav>
              }
            
            </AuthUserContext.Consumer>
            {/* #nav-menu-container */}
          </div>
        </header>
        {/* #header */}
        {/* Intro Section */}
        <section id="intro">
          <div className="intro-container">
            <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators" />
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="carousel-background"><img src="img/intro-carousel/1.jpeg" alt /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Why Girl_Power ?</h2>
                      <p>
                        First and foremost because women are amazing, strong, caring, passionate, and loyal problem solvers!
                        “Women in tech” has become a hot topic, and it is an important one. More important is diversity in 
                        general. 
                        Having different backgrounds, mindsets, challenges, privileges, world-views, political 
                        affiliations, fashion choices, and family dynamics around the same table solving a problem is 
                        a guaranteed formula for success.
                      </p>
                      <a href="#about" className="btn-get-started scrollto">Get Started !!</a>               
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-background"><img src="img/intro-carousel/2.jpg" alt /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Why Only for WOMEN ?</h2>
                      <p>
                        First and foremost because women are amazing, strong, caring, passionate, and loyal problem solvers!
                        “Women in tech” has become a hot topic, and it is an important one. More important is diversity in 
                        general. Having men AND women, AND people from different backgrounds working in tech and around
                        innovation is essential to building the best product, growing a company and doing good in general.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-background"><img src="img/intro-carousel/3.webp" alt /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Women Graph</h2>
                      <p>
                        Women in technology were especially well-represented. Ratings for the leadership effectiveness of women versus men were the most pronounced
                        in information technology, where women had a percentile score of 52.1 compared to 42.0 for men. 
                       
                      </p>
                      <a href="#graph" className="btn-get-started scrollto">Graph !! </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-background"><img src="img/intro-carousel/4.webp" alt /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2>Services</h2>
                      <p>
                        Girl_Power provides a variety of communications, marketing communications and public relations services. We work closely with 
                        you and your team to develop and help execute plans, programs and projects utilizing in-house expertise, as well as external
                        resources by proviing vrious kind of tech Ted-Talks, Issues,and News for women awarenss for randing companies,competetions
                        and other technology awareness purpose.
                      </p>
                      <a href="#services" className="btn-get-started scrollto">Services ..</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* #intro */}
        <main id="main">
          {/*About Us Section*/}
          <section id="about">
            <div className="container">
              <header className="section-header">
                <h3>About Us</h3>
                <p>
                  Women Empowering Nations is a nonprofit organization with a mission to provide exposure and mentorship
                  for girls of color in underserved communities to develop them into socially conscious global leaders.   
                </p></header>
              <div className="row about-cols">
                <div className="col-md-4 wow fadeInUp">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-mission.jpg" alt className="img-fluid" />
                      <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
                    </div>
                    <h2 className="title"><a href="#about">Our Mission</a></h2>
                    <p>
                      Promoting social and economic empowerment of women through cross-cuting policies and programmes, mainstreaming gender concerns, creating awareness about their rights and facilitating institutional and legislative support for enabling them realize their human rights and develop to their full potential
                    </p>
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-plan.jpg" alt className="img-fluid" />
                      <div className="icon"><i className="ion-ios-list-outline" /></div>
                    </div>
                    <h2 className="title"><a href="#about">Our Plan</a></h2>
                    <p>
                      The opinion that acknowledge women to work in Tech is solely a PR effort by companies and that doing so is damaging to a company’s 
                      ctivity and bottom line is a dangerous one. Especially when you consider the opposite is proven to be true by a wide array of 
                      data-driven sources.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="about-col">
                    <div className="img">
                      <img src="img/about-vision.jpg" alt className="img-fluid" />
                      <div className="icon"><i className="ion-ios-eye-outline" /></div>
                    </div>
                    <h2 className="title"><a href="#about">Our Vision</a></h2>
                    <p>
                      <br />
                      Empowered women living with dignity and contributing as equal partners in development in an 
                      environment free from violence and discrimination. And, wellnurtured children with full
                      opportunities for growth and development in a safe and protective environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* #about */}
          {/*graph Section*/}
          <section id="graph">
            <div className="container">
              <header className="section-header">
                <h3>Graphs</h3>
                <p>
                  Women in technology were especially well-represented. Ratings for the leadership effectiveness of women versus men were the most pronounced
                  in information technology, where women had a percentile score of 52.1 compared to 42.0 for men. In addition to information technology, 
                  the largest gaps came in other male-dominated functions like engineering, research and development, legal, product development, and sales.
                  Females were rated more positively in 12 of the top 16 job functions surveyed.
                </p>  
              </header>
              <div className="row about-cols">
                <div className="col-md-6   about-col img">
                  <img src="img/graph/1.png" alt className="img-fluid" /> 
                </div>
                <div className="col-md-6  about-col img">
                  <img src="img/graph/3.png" alt className="img-fluid" />
                </div>
                <div className="col-md-6  about-col img">
                  <img src="img/graph/3.png" alt className="img-fluid" />    
                </div>
                <div className="col-md-6  about-col img">
                  <img src="img/graph/4.png" alt className="img-fluid" />         
                </div>
              </div>
            </div>
          </section>
          {/* #graph */}
          {/*Services Section*/}
          <section id="services">
            <div className="container">
              <header className="section-header wow fadeInUp">
                <h3>Services</h3>
                <p>
                  Girl_Power provides a variety of communications, marketing communications and public relations services. We work closely with 
                  you and your team to develop and help execute plans, programs and projects utilizing in-house expertise, as well as external
                  resources by proviing vrious kind of tech Ted-Talks, Issues,and News for women awarenss for randing companies,competetions
                  and other technology awareness purpose.
                </p>
              </header>
              <div className="row">
                <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-analytics-outline" /></div>
                  <h4 className="title"><a href="#services">NEWS</a></h4>
                  <p className="description">
                    The importance of technology cannot be underestimated; the technological industries are probably the fastest moving in the world following 
                    news stories is vital because technology can cover all manner of industries and hence news stories vary greatly in subject matter.                 
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" /></div>
                  <h4 className="title"><a href="#services">SUCCESS STORIES</a></h4>
                  <p className="description">
                    A Success Story is an account of the achievement of success by a person or an organisation.
                    The Success Story is a great successful performance, often unexpectedly or in spite of unfavourable
                    conditions, often by making a lot of money.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-paper-outline" /></div>
                  <h4 className="title"><a href="#services">ISSUES</a></h4>
                  <p className="description">
                    PROBLEM-SOLVING IS A UNIVERSAL JOB SKILL THAT APPLIES TO ANY POSITION AND EVERY INDUSTRY. WHILE EVERYONE IS TASKED WITH SOME FORM OF PROBLEM-SOLVING IN THEIR WORKPLACE, NOT ALL EMPLOYEES ARE GOOD AT IT.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
                  <h4 className="title"><a href="#services">TED TALKS </a></h4>
                  <p className="description">
                    A suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, and cover a wide 
                    range of subjects to foster learning, inspiration and wonder – and provoke conversations that matter.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
        </main>
        {/*Footer*/}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-info">
                  <h3>Girl_Power</h3>
                  <p>
                    {/* "If you educate a man, you educate a family and a village. <br />To educate a woman, you empower a nation." */}
                    "Here's to strong women.
                    <br />
                    May we know them.
                    <br />
                    May we be them.
                    <br />
                    May we raise them."
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="ion-ios-arrow-right" /> <a href="#">Home</a></li>
                    <li><i className="ion-ios-arrow-right" /> <a href="#">About us</a></li>
                    <li><i className="ion-ios-arrow-right" /> <a href="#">Services</a></li>
                    <li><i className="ion-ios-arrow-right" /> <a href="#">Terms and Conditions</a></li>
                    <li><i className="ion-ios-arrow-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-1 col-md-6 ">
                </div>
                <div className="col-lg-4 col-md-6 footer-contact footer-links">
                  <h4>Contact Us</h4>
                  <p>
                    xyz,xyz<br />
                    India<br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> girl_power@gmail.com<br />
                  </p><ul>
                    <li><i className="ion-ios-arrow-right" /> <a href="#team">Our Team</a></li>
                  </ul>
                  <p />
                  <div className="social-links">
                    {/*<a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
      <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong>Girl_Power</strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by Girl_Power              
            </div>
            
            </div>
          
        </footer>
        {/* #footer */}
        {/* back to top */}
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        {/* JavaScript Libraries */}
        {/* Contact Form JavaScript File */}
        {/*  */}
        {/*  Main Javascript File */}
      </div>
   
     
   
      )   
    }
  };
  /*const handleRedirect=()=>
{
        <Route render=
                  {({history})=>
                  (
                  history.push(ROUTES.APP)
                  )}
                  />
}*/
export default Landing;