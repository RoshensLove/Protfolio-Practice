import React, { Component } from 'react'
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import telegram from "./../../img/icons/telegram.svg";
import './style.css'

export class Footer extends Component {
  render() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={telegram} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>done as a pet project</p>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer