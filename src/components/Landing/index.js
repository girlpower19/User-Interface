import React from 'react';
class Landing extends React.Component{
    render() {
      return (
       
                <div>
                  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                  {/* Libraries CSS Files */}
                  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
                  <link href="lib/animate/animate.min.css" rel="stylesheet" />
                  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
                  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
                  {/* Main Stylesheet File */}
                  <link href="css/style.css" rel="stylesheet" />
                  {/* Header */}
                  
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
                                <h2>Why She_Will ?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="#about" className="btn-get-started scrollto">Get Started !!</a>               
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="carousel-background"><img src="img/intro-carousel/2.jpg" alt /></div>
                            <div className="carousel-container">
                              <div className="carousel-content">
                                <h2>Why Only for WOMEN ?</h2>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                <a href="#featured-services" className="btn-get-started scrollto">Why ??</a>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="carousel-background"><img src="img/intro-carousel/3.webp" alt /></div>
                            <div className="carousel-container">
                              <div className="carousel-content">
                                <h2>Women Graph</h2>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                                <a href="#featured-services" className="btn-get-started scrollto">Graph !! </a>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="carousel-background"><img src="img/intro-carousel/4.webp" alt /></div>
                            <div className="carousel-container">
                              <div className="carousel-content">
                                <h2>Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </header>
                        <div className="row about-cols">
                          <div className="col-md-4 wow fadeInUp">
                            <div className="about-col">
                              <div className="img">
                                <img src="img/about-mission.jpg" alt className="img-fluid" />
                                <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
                              </div>
                              <h2 className="title"><a href="#">Our Mission</a></h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="about-col">
                              <div className="img">
                                <img src="img/about-plan.jpg" alt className="img-fluid" />
                                <div className="icon"><i className="ion-ios-list-outline" /></div>
                              </div>
                              <h2 className="title"><a href="#">Our Plan</a></h2>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="about-col">
                              <div className="img">
                                <img src="img/about-vision.jpg" alt className="img-fluid" />
                                <div className="icon"><i className="ion-ios-eye-outline" /></div>
                              </div>
                              <h2 className="title"><a href="#">Our Vision</a></h2>
                              <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* #about */}
                    {/*Services Section*/}
                    <section id="services">
                      <div className="container">
                        <header className="section-header wow fadeInUp">
                          <h3>Services</h3>
                          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
                        </header>
                        <div className="row">
                          <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                            <div className="icon"><i className="ion-ios-analytics-outline" /></div>
                            <h4 className="title"><a href>NEWS</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                          </div>
                          <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                            <div className="icon"><i className="ion-ios-bookmarks-outline" /></div>
                            <h4 className="title"><a href>SUCCESS STORIES</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                          </div>
                          <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-duration="1.4s">
                            <div className="icon"><i className="ion-ios-paper-outline" /></div>
                            <h4 className="title"><a href>ISSUES</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                          </div>
                          <div className="col-lg-6 col-md-12 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                            <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
                            <h4 className="title"><a href>TED TALKS </a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* #services */}
                    {/* Clients Section*/}
                    {/* <section id="clients" class="wow fadeInUp">
                <div class="container">
          
                  <header class="section-header">
                    <h3>Our Clients</h3>
                  </header>
          
                  <div class="owl-carousel clients-carousel">
                    <img src="img/clients/client-1.png" alt="">
                    <img src="img/clients/client-2.png" alt="">
                    <img src="img/clients/client-3.png" alt="">
                    <img src="img/clients/client-4.png" alt="">
                    <img src="img/clients/client-5.png" alt="">
                    <img src="img/clients/client-6.png" alt="">
                    <img src="img/clients/client-7.png" alt="">
                    <img src="img/clients/client-8.png" alt="">
                  </div>
          
                </div>
              </section> */}
                    {/* #clients */}
                    {/*Team Section*/}
                    {/* <section id="team">
                <div class="container">
                  <div class="section-header wow fadeInUp">
                    <h3>Team</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                  </div>
          
                  <div class="row">
          
                    <div class="col-lg-3 col-md-6 wow fadeInUp">
                      <div class="member">
                        <img src="img/team-1.jpg" class="img-fluid" alt="">
                        <div class="member-info">
                          <div class="member-info-content">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                            <div class="social">
                              <a href=""><i class="fa fa-twitter"></i></a>
                              <a href=""><i class="fa fa-facebook"></i></a>
                              <a href=""><i class="fa fa-google-plus"></i></a>
                              <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div class="member">
                        <img src="img/team-2.jpg" class="img-fluid" alt="">
                        <div class="member-info">
                          <div class="member-info-content">
                            <h4>Sarah Jhonson</h4>
                            <span>Product Manager</span>
                            <div class="social">
                              <a href=""><i class="fa fa-twitter"></i></a>
                              <a href=""><i class="fa fa-facebook"></i></a>
                              <a href=""><i class="fa fa-google-plus"></i></a>
                              <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                      <div class="member">
                        <img src="img/team-3.jpg" class="img-fluid" alt="">
                        <div class="member-info">
                          <div class="member-info-content">
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                            <div class="social">
                              <a href=""><i class="fa fa-twitter"></i></a>
                              <a href=""><i class="fa fa-facebook"></i></a>
                              <a href=""><i class="fa fa-google-plus"></i></a>
                              <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div class="member">
                        <img src="img/team-4.jpg" class="img-fluid" alt="">
                        <div class="member-info">
                          <div class="member-info-content">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                            <div class="social">
                              <a href=""><i class="fa fa-twitter"></i></a>
                              <a href=""><i class="fa fa-facebook"></i></a>
                              <a href=""><i class="fa fa-google-plus"></i></a>
                              <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          
                  </div>
          
                </div> 
              </section> */}
                    {/* #team */}
                    {/*==========================
                Contact Section
              ============================*/}
                    {/* <section id="contact" class="section-bg wow fadeInUp">
                <div class="container">
          
                  <div class="section-header">
                    <h3>Contact Us</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                  </div>
          
                  <div class="row contact-info">
          
                    <div class="col-md-4">
                      <div class="contact-address">
                        <i class="ion-ios-location-outline"></i>
                        <h3>Address</h3>
                        <address>A108 Adam Street, NY 535022, USA</address>
                      </div>
                    </div>
          
                    <div class="col-md-4">
                      <div class="contact-phone">
                        <i class="ion-ios-telephone-outline"></i>
                        <h3>Phone Number</h3>
                        <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                      </div>
                    </div>
          
                    <div class="col-md-4">
                      <div class="contact-email">
                        <i class="ion-ios-email-outline"></i>
                        <h3>Email</h3>
                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                      </div>
                    </div>
          
                  </div>
          
                  <div class="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form action="" method="post" role="form" class="contactForm">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          <div class="validation"></div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div class="validation"></div>
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validation"></div>
                      </div>
                      <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                  </div>
          
                </div>
              </section> */}
                    {/* #contact */}
                  </main>
                  {/*Footer*/}
                  <footer id="footer">
                    <div className="footer-top">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 footer-info">
                            <h3>She_Will</h3>
                            {/* <p></p> */}
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
                              <strong>Email:</strong> girlpower@gmail.com<br />
                            </p><ul>
                              <li><i className="ion-ios-arrow-right" /> <a href="#contact">Contact Form</a></li>
                              <li><i className="ion-ios-arrow-right" /> <a href="#team">Our Team</a></li>
                            </ul>
                            <p />
                            <div className="social-links">
                              <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                              <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
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
                        Designed by <a href="https://girlpower.com/">Girl Power</a>
                      </div>
                    </div>
                  </footer>
                  {/* #footer */}
                  {/* back to top */}
                  <a href="#" className="back-to-top">
                      <i className="fa fa-chevron-up" />
                      </a>
                  {/* JavaScript Libraries */}
                  {/* Contact Form JavaScript File */}
                  {/*  */}
                  {/*  Main Javascript File */}
                </div>
      )   
    }
  };
export default Landing;