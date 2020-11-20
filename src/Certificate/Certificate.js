import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import * as imageData from '../Data/Cert';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import copyIcon from '../assets/copy-solid.svg'
import './Certificate.scss'



export default function Certificate() {
   
    const [state,setState]=useState({
        copied:false
    })
    return (
        <div className="certificate-container" id='cert'>
            <div className='certificate-contain'>
                <h1 className="certificate-title">CERTIFICATE</h1>
                <div className='certificate-img-container'>
                    {imageData.cert.map((data) => (
                        <>
                        <Link href ={data.validationLink}><img className='certificate-img' src={data.image} alt={data.title} /></Link>
                        <p className='validation-number-title'>Validation Number:</p>
                        <div classname='validation-number-container'>
                            <p className='validation-number'>{data.validationId}</p>
                             <CopyToClipboard text={data.validationId} onCopy={() => setState({copied: true})}> 
                                <button className='copy-icon'><FileCopyIcon fontSize="small" className='icon'/></button>
                            </CopyToClipboard> 
                        </div>
                        
                        </>
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