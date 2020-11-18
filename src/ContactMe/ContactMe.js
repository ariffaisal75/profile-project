import React from 'react'
import './ContactMe.scss'
import Button from '@material-ui/core/Button';
import gmail from '../assets/gmail.svg'
import whatsapp from '../assets/whatsapp.svg'
import Link from '@material-ui/core/Link';
import { animateScroll as scroll } from 'react-scroll'


export default function ContactMe() {
    return (
        <div className='contact-container' >

            <div className='content-container' id='contact'>
                <h5 className="section-title">CONTACT</h5>

                <p className='contact-text-first'>Currently, looking for a job opportunities <span className='comment-word'>//Hired</span>. Feel free to comment or give your opinion about this website, I would love to hear it.</p>
                <p className='contact-text-second'>Contact me using this platform. Thank you for spending your time</p>
                <div className='img-container'>
                    <Link href='mailto:ariffaisal75@gmail.com' target='_blank'>
                        <img src={gmail} className='gmail-img'></img>
                    </Link>
                    <Link href='http://Www.wasap.my/60175416244' target='_blank'>
                        <img src={whatsapp} className='whatsapp-img'></img>
                    </Link>

                </div>
            </div>


        </div>
    )
}