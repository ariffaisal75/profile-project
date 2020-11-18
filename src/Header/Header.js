import React, { useState } from 'react'
import './Header.scss'
import { Paper, Tabs, Tab, Avatar, AppBar, IconButton, MenuItem, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link, animateScroll as scroll } from 'react-scroll'
import * as MenuData from '../Data/Menu'

export default function Header() {

  const [value, setValue] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [intro, setIntro] = useState(false)
  const [about, setAbout] = useState(false)
  const [cert, setCert] = useState(false)
  const [project, setProject] = useState(false)
  const [contact, setContact] = useState(false)

  const handleClose = () => {
    setOpen(!isOpen)
  }

  const handleActiveNav = (value) => {
    if (value == 1) {
      setContact(false)
      setProject(false)
      setCert(false)
      setAbout(false)
      setIntro(true)
    }
    else if (value == 2) {
      setContact(false)
      setProject(false)
      setCert(false)
      setAbout(true)
      setIntro(false)
    }
    else if (value == 3) {
      setContact(false)
      setProject(false)
      setCert(true)
      setAbout(false)
      setIntro(false)
    }
    else if (value == 4) {
      setContact(false)
      setProject(true)
      setCert(false)
      setAbout(false)
      setIntro(false)
    }
    else if (value == 5) {
      setContact(true)
      setProject(false)
      setCert(false)
      setAbout(false)
      setIntro(false)
    }
    else {
      setContact(true)
      setProject(false)
      setCert(false)
      setAbout(false)
      setIntro(false)
    }

  }
  return (
    <>
      <Paper className="nav-container">

        <div className='webView'>
          <div className="nav-tabs">
            {MenuData.menu.map((data) => (
              < Link
                activeClass="active"
                to={data.ContainerId}
                spy={true}
                smooth={true}
                offset={data.offset}
                duration={data.duration} >

                <Tab className="nav-tab" label={data.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className='mobileView'>
          <IconButton onClick={() => handleClose()}>
            <MenuIcon></MenuIcon>
          </IconButton>
        </div>

        <ul className={isOpen ? "active-nav-mobileView mobileView" : "nav-mobileView mobileView"}>
          <li className='close-button'>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </li>
          <div className='page-route'>
            {MenuData.menu.map((data, idx) => (
              <li>
                <Link
                  activeClass="active"
                  to={data.ContainerId}
                  spy={true}
                  smooth={true}
                  offset={data.offset}
                  duration={data.duration}>
                  <Tab className={data.ContainerId ? 'active-sideBar-tab' : 'sideBar-tab'}
                    onClick={() =>
                      handleActiveNav(idx)} label={data.name} />
                </Link>
              </li>
            ))}
          </div>

        </ul>

      </Paper >
    </>
  )
}
