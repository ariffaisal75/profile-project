import React from 'react'
import Grid from '@material-ui/core/Grid';
import robot from '../assets/robot.jpeg'
import './About.scss'
import { animateScroll as scroll } from 'react-scroll'




export default function about() {

    return (
        <div className="about-container" id="about">

            <Grid container spacing={0} className="about-grid-container">
                <Grid item className='item-grid'>
                    <div className="about-image-container">
                        <img className="about-image" src={robot} />
                    </div>

                </Grid>
                <Grid item className='item-grid'>
                    <div className="about-text-container">
                        <h2 className="about-title">LET ME INTRODUCE MYSELF</h2>
                        <p className="about-text-contain">I love to learn and explore new thing. Getting new exprience is exciting.
                            I am eager to develop my skill in programming. For me, learning is essential for growth and self development.</p>
                        <ul className='about-text-list'>
                            <li>Graduated from University Malaya on February 2020 with Degree of Computer Science
                                (Software Engineering)</li>
                            <li>Experience in React, React Native, Angular, Javascript, Python, MongoDB and AWS Services </li>
                        </ul>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}