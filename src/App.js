import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
  {/* <!-- Header --> */}
  <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1><span>S</span>rikanth <span>P</span>oola</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Education">Education</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Header -->


  <!-- Hero Section  --> */}
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>SRIKANTH POOLA<span></span></h1>
        <a href="#services" type="button" className="cta">Portfolio</a>
      </div>
    </div>
  </section>
  {/* <!-- End Hero Section  -->

  <!-- Service Section --> */}
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">Educat<span>i</span>on</h1>
        
      </div>
      <div className="service-bottom">
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/education.png" /></div>
        
          <h2>Bachelor of Engineering</h2>
          <p><b>College :</b> Sri Venkateswara Engineering College, Tirupati</p>
          <p><b>Branch: CSE</b> </p><p>Computer Science and Engineering</p>
          <p>Passout : 2023</p>
        </div>
        
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/education.png" /></div>
          
          <h2>Board of intermediate</h2>
          <p><b>College :</b>Sri Chaitanya Junior College, Tirupati</p>
          <p><b>Domain : MPC</b></p>
          <p>Passout : 2019</p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/education.png" /></div>
          <h2>SSC</h2>
          <p><b>School :</b>A.P.Residential school, Gyarampalli</p>
          <p><p>Passout : 2017</p></p>
        </div>
        
      </div>
    </div>
  </section>
  {/* <!-- End Service Section -->

  <!-- Projects Section --> */}
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
      </div>
     <div className="all-projects">
        
        <div className="project-item">
          <div className="project-info">
            <h1>Phone Pe Chatbot Using Python</h1>
            <h2></h2>
            <p>DESCRIPTION:The Python code built with conditions functions to resolve the problems faced</p>
            <p> Purpose of doing Project: Clone of a PhonePe Help ChatBot 
              Which responds to the questions and resolve it.</p>
              <p> Made this Project as an Open Source: Made and upload it in 
                GitHub So that anybody can access and utilize and make use of it.</p>
                <p>Experience gained: A Real Time Experience gained to Response
                 to solve the Problem and satisfy the user</p>
          </div>
          <div className="project-img">
            <img src="Phone Pe Chatbot1-pic.webp" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Final Year Major Project</h1>
            <h2>Fake Profile Identification in Social Networking using Machine Learning and NLP</h2>
            <p>On this Project,we presented a Machine Learning & Natural Language Processing system to increase the
               accuracy rate of detecting the fake accounts.we opted for Random Forest Tree Classifier Algorithm.</p>
          </div>
          <div className="project-img">
            <img src="social-media-apps-1.jpg" alt="img"/>
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Mini Project</h1>
            <h2>Jarvis – Virtual desktop assistant using python.</h2>
            <p>As a personal assistant, Jarvis assists the end-user with day-to-day activities like general human
              conversation, searching queries in google, bing or yahoo, searching for videos, retrieving images, live
              weather conditions, word meanings, searching for medicine details, health recommendations based on
              symptoms and reminding the user about the scheduled events and tasks.</p>
          </div>
          <div className="project-img">
            <img src="jarvis-tts1.jpg" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Projects Section -->

  <!-- About Section --> */}
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src="IMG-371612.jpg"alt="img"/>
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        <h1><b>Fresher(Full Stack Developer)</b></h1>
        <p>Seeking a challenging career
          opportunity and being a part
          of progressive organization that
          encourage me to expand
          knowledge alongside being
          conducive to enhancing the
          organization’s success.</p>
           
        <h1>SKILLS </h1>
        <br/>
      <h2> Python </h2>
       <h2> MySQL</h2>
       <h2>Django</h2>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    {/* </p> */}
        <a href="srikanth_fullstack_word.pdf" className="cta">Download Resume</a>
      </div>
    </div>
  </section>
  {/* <!-- End About Section -->

  <!-- Contact Section --> */}
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+91 7893913248</h2>
            
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>srikanth7893poola@gmail.com</h2>
            
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Pileru, AndhraPradesh, India</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Contact Section -->

  <!-- Footer --> */}
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1><span>S</span>rikanth <span>P</span>oola</h1>
      </div>
      
      <div className="social-icon">
        <div className="social-item">
          <a href="https://www.linkedin.com/in/poola-srikanth-536721244/"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" /></a>
        </div>
        <div className="social-item">
          <a href="https://github.com/srikanth7680"><img src="https://img.icons8.com/bubbles/100/000000/github.png"/></a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/srikanth_a30/"><img src="https://img.icons8.com/bubbles/100/000000/instagram.png" /></a>
        </div>
      </div>
      <p>Copyright © 2023 Srikanth. All rights reserved</p>
    </div>
  </section>
  {/* <!-- End Footer --> */}
  <script src="./app.js"></script>
</div>
  );
}

export default App;
