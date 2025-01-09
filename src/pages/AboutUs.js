import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "./AboutUs.css";

const AboutUs = () => {
  const features = [
    "Hands-on Learning",
    "Expert Mentorship",
    "Flexible Learning",
    "Comprehensive Curriculum",
    "Vibrant Community",
    "JobReady Skills",
  ];

  const mentors = [
    { name: "Firoz Khan", role: "Centre Head (Optus)", image: '../images/Ambassador/image4.jpg' },
    { name: "Yashpal Puri", role: "Corporate Trainer ", image: '../images/Ambassador/image12.jpg' },
    { name: "Aditya Raj", role: "ICPC Amritapuri Regionalist Rank 82", image: '../images/Ambassador/image1.jpg' },
    { name: "Hiya Jain", role: "Competitive Programmer", image: '../images/Ambassador/image5.png' },
    { name: "Sunny Kumar", role: "Specialist at Codeforces Knight", image: '../images/Ambassador/image9.jpg' },
    { name: "Divyanshu Kumar Singhal", role: "Infosys SP Programmer", image: '../images/Ambassador/image7.jpg' },
  ];

  const techTeam = [
    { name: "Aastha Purey", role: "Full Stack Developer", image: '../images/Ambassador/image13.jpg' },
    { name: "Hitesh Sharma", role: "Full Stack Developer", image: '../images/Ambassador/image10.jpg' },
    { name: "Ishika Raj", role: "Frontend / Backend", image: '../images/Ambassador/image15.jpg' },
    { name: "Prakhar Pandey", role: "Android Developer", image: '../images/Ambassador/image2.png' },
    { name: "Aanchal Agarwal", role: "Graphic Designer", image: '../images/Ambassador/image14.jpg' },
  ];

  const nonTechTeam = [
    { name: "Khushi Shrivastava", role: "Centre Growth Associate", image: '../images/Ambassador/image8.jpg' },
    { name: "Shruti Singour", role: "Academic Associate", image: '../images/Ambassador/image6.jpg' },
    { name: "Nandini Patel", role: "Academic and Career Counsellor", image: '../images/Ambassador/image11.jpg' },
  ];
  const TeamSection = ({ title, members }) => (
    <section className="team-section">
      <h2>{title}</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-header">
              <div className="profile-image" />
              <img alt="" src={member.image} className="profile-image"></img>
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navigation />
      <div className="main-container">
        {/* About Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-header">
              <h1>About Us</h1>
              <p className="about-header-text">
                Coder House is a dynamic learning platform that empowers
                individuals to master coding through hands-on courses, expert
                guidance and a vibrant community.
              </p>
            </div>

            <div className="about-content">
              <div className="about-image">
                <div className="image-containerss">
                  <img src="../images/girl coding on a laptop.png" alt="Girl coding on laptop" />
                </div>
              </div>

              <div className="about-features">
                <h2>Unlock Your Potential,<br /> Code Your Future</h2>
                <p className="features-intro">Here's why Coder House is the best:</p>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                    <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-section">
          <div className="section-container">
            <div className="why-choose-header">
              <h2>Why Choose <span className="highlight">CODER HOUSE</span></h2>
            </div>
            <div className="content-wrapper">
              <div className="text-content">
                <p>Join us and experience real transformation in your career:</p>
                <ul className="benefits-list">
                  <li>
                    <span className="check-mark">✓</span>
                    <span className="feature-text">147% Average Hike in career growth</span>
                  </li>
                  <li>
                    <span className="check-mark">✓</span>
                    <span className="feature-text">1000+ Careers Transformed with real-world skills</span>
                  </li>
                  <li>
                    <span className="check-mark">✓</span>
                    <span className="feature-text">50+ Experienced Mentors guiding you to success</span>
                  </li>
                </ul>
              </div>
              <div className="image-content">
                <img
                  src="../images/why choose coder house.jpg"
                  alt="Why Choose Coder House"
                  className="placeholder-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* We Give Back Section */}
        <section className="give-back-section">
          <div className="section-content">
            <h2>We Give Back</h2>
            <p>
              At Coder House, We believe in making education accessible to all.
              Our mission is to uplift students in Tier 2 and Tier 3 cities by providing them
              with high-quality coding education, empowering them to unlock new career
              opportunities and build a better future. For students in Tier 1 cities, we offer
              additional support to help them refine their skills, advance their careeers and stay
              ahead in the ever-evolving tech landscape. We're dedicated to creating a level playing
              field ensuring every student has the chance to suceed, no matter where they're from.
            </p>
          </div>
        </section>

        {/* Team Sections */}
        <TeamSection title="Mentors" members={mentors} />
        <TeamSection title="Tech Team" members={techTeam} />
        <TeamSection title="Non-Tech Team" members={nonTechTeam} />
      </div>

      <section className="cta-section">
        <div className="cta-content">
          <p className="cta-heading">
            Unlock your potential and shape your future with Coder House. <br />
            Join us today to start your learning today!
          </p>
          <button className="cta-button">Join Us Today!</button>
        </div>
      </section>
      <div className='card-section-about'>
        <div className="contact-card">
          <img src="./images/about-contact.jpg" alt="Contact" className="contact-image" />
          <div className="contact-details">
            <h3>Contact Us</h3>
            <p>Email: coderhouseoptus@gmail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;