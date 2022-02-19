import React from "react";
import logo from '../gg.jpg'

export default function Info() {
    return(
        <div>
            <img src={logo} className='logo'/>
            <div className="info">
                <h1 className="info-header">Abideen Bello</h1>
                <p className="info-title">Data Scientist</p>
                <p className="info-site"><a href="https://bideen.medium.com" target='_blank' className="gh">bideen.medium.com</a></p> 
            </div>
            <button className="btn1"><a href="#" _blank=''><i class="fa fa-envelope" aria-hidden="true">   Email</i></a></button>
            <button className="btn2"><a href="https://linkedin.com/in/bideeen" target='_blank' className="lik" ><i class="fa fa-linkedin-square" aria-hidden="true">   Linkedin</i></a></button>
            <h2 className="about-header">About</h2>
            <p className="about-details">I am a data scientist with a particular interest in making meaningful insights from preprocessed data and creating predictive models. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="interest-header">Interests</h2>
            <p className="interest-details">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            <div className="icons">
                <span className="tw"><a href="https://twitter.com/_bideen" target='_blank'><i class="fa fa-twitter-square" aria-hidden="true"></i></a></span>
                <span className="fb"><a href="https://facebook.com/bideen" target='_blank'><i class="fa fa-facebook-square" aria-hidden="true"></i></a></span>
                <span className="in"><a href="https://instagram.com/bideen__" target='_blank'><i class="fa fa-instagram" aria-hidden="true"></i></a></span>
                <span className="gt"><a href="https://github.com/bideeen" target='_blank'><i class="fa fa-github-square" aria-hidden="true"></i></a></span>
            </div>
        </div>
    )
}