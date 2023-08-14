import React, { Component } from 'react'
import Header from '../components/header/Header'

export class Home extends Component {
  render() {
    return (
        <>
            <Header/>

            <main className="section">
            <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, HTML, CSS, BootStrap, TailwindCSS, </p>
                    </li>
                </ul>
            </div>
            </main>
        </>
        
    )
  }
}

export default Home