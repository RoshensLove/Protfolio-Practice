import React, { Component } from 'react'
import Project from '../components/project/Project'
import { projects } from '../helpers/projectsList'

export class Projects extends Component {
  render() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">

                        {projects.map((project, index) => {
                            return <Project 
                                key={index} 
                                title={project.title} 
                                img={project.img}
                                index={index}
                                />
                        })}

                                              

                    </ul>
                </div>
            </main>
        </>
      
    )
  }
}

export default Projects