import React from 'react'
import Grid from '@material-ui/core/Grid';
import FamilyMart from '../assets/familymart_logo.jpg'
import Link from '@material-ui/core/Link';
import ProjectList from '../component/ProjectList/ProjectList'
import * as Data from '../Data/Project'
import './Project.scss'




export default function Project() {

    return (
        <div className='project-container' id='project'>
            <h1 className='section-title'>PROJECT INVOLVED</h1>
            {Data.project.map((data) =>
                (
                    <ProjectList data={data} className='project-desc' />
                )

            )}
        </div>
    )
}