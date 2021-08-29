import React from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './ProjectList.scss'



export default function ProjectList({
    data,
}) {
    return (
        <>
            {
                data.link && data.link != null ?
                    (

                        <Grid container spacing={2} className='project-content'>
                            <Grid item className='project-image-container'>
                                {/* <ButtonBase className={classes.image}> */}
                                <img className='project-image' alt="complex" src={data.img} />
                                {/* </ButtonBase> */}
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        < Link href={data.link} target='_blank' ><h3 className='project-title'>{data.title} ({data.year})
                                                ({data.place})</h3> </Link>
                                        <p className='Project-description'>{data.desc}</p>
                                        <div className="project-language-container">
                                            {data.language.map((language,idx) => (
                                                <p key={idx} className='project-language'>#{language}</p>
                                            ))}
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )


                    : (
                        <Grid container spacing={2} className='project-content'>
                            <Grid item className='project-image-container'>
                                {/* <ButtonBase className={classes.image}> */}
                                <img className='project-image' alt="complex" src={data.img} />
                                {/* </ButtonBase> */}
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <h3 className='project-title'>{data.title} ({data.year}) ({data.place})</h3>
                                        <p className='Project-description'>{data.desc}</p>
                                        <div className="project-language-container">
                                            {data.language.map((language,idx) => (
                                                <p key={idx}className='project-language'>#{language}</p>
                                            ))}
                                        </div>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )

            }

        </>
    )
}