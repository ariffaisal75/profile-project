import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import associate from '../assets/associateCertified.png'
import './Certificate.scss'



export default function Certificate() {
    const imageData = [
        {
            image: associate,
            title: 'AWS Certified Solutions Architect – Associate'
        }]

    return (
        <div className="certificate-container" id='cert'>
            <div className='certificate-contain'>
                <h1 className="certificate-title">CERTIFICATE</h1>
                <div className='certificate-img-container'>
                    {imageData.map((data) => (
                        <img className='certificate-img' src={data.image} alt={data.title} />

                    ))}
                </div>
                <Grid container spacing={0} className='certificate-grid-container'>
                    <Grid item xs={12}>


                    </Grid>

                </Grid>

            </div>
        </div>
    )
}