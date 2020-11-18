import React from 'react'
import Grid from '@material-ui/core/Grid';
import programmer from '../assets/programmer.jpg'
import './Introduction.scss'
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import CV from '../assets/ArifFaisal.pdf'


export default function Introduction() {
    return (
        <div className="container" id="intro">
            <Grid container spacing={0} className="intro-grid-container">
                <Grid item className="intro-grid-item" >
                    <div className="intro-image-container">
                        <img className="intro-image" src={programmer} />
                    </div>

                </Grid>
                <Grid item className="intro-grid-item ">
                    <div className="text-container">
                        <p className="text-intro">Hello, I'm</p>
                        <p className="text-name">Arif Faisal</p>
                        <p className="text-job">{`< Web Developer />`}</p>
                        {/* <Button variant="outlined" color='primary' size='large'>My CV</Button> */}
                        <Link href={CV} target='_blank'><button className='cv-button'>GET CV</button></Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}