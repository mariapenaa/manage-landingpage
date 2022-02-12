import {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss';
import logo from 'images/logo.svg'
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Button from 'shared/Button/Button'
const Header = () => {
  let [open, setOpen] = useState(false);
  let [scrolling, setScrolling] = useState('header1');
  const scrollTrigger = 200;

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    })

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        setScrolling('header')
      } else {
          setScrolling('header1')
    }
}

  return (
    <React.Fragment>
    <header className={scrolling}>
      <img src={logo} />
      <ul className="headerList">
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Community</li>
      </ul>
      <Button text='get started' color='orange'/>
      {open ?
        <CloseIcon className="menuIcon" onClick={()=>setOpen(false)}/>
        :  <MenuIcon className="menuIcon" onClick={()=>setOpen(true)}/>
      }
    </header>

    <div className={!open ? ' hamburgerMenu' : ' hamburgerMenu2'}>
      <div className="menuSquare">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </div>
    </div> 

    </React.Fragment>
  );
}

export default Header;