import React, {FC, useEffect, useState} from 'react';
import Link from 'next/link';
interface props {
    dark: boolean;
}
const Header:FC<props> = (props) => {
    //Based on navbar provided in daisyUI docs
    const [navTrans, setNavTrans] = useState(true);
    const onScroll = (ev: Event):void => {
      if (window.scrollY >= 50) {
        setNavTrans(false);
      }
      if (window.scrollY < 50) {
        setNavTrans(true);
        
      }
    } 
    useEffect(():void => {
      window.addEventListener('scroll', onScroll);
    })
    const navC = ():string => {
      let darkString = "";
      let bgstring = " bg-primary-content"
      if (props.dark) {
        darkString = " text-black";
        bgstring = " bg-primary"
      }  
      if (navTrans == true) {
            return "navbar top-0 z-50 bg-transparent" + darkString;
        } 
        return "navbar sticky top-0 z-50" + darkString + bgstring;
    }
    return (
        <div className={navC()}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className={"menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 " + (props.dark ? "bg-primary" : "bg-primary-content")}>
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="/form">Form</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">IMSA Rentals</a>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
          <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill={props.dark ? "#000000" : "#FFFFFF"} viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg></Link>
          </button>
        </div>
      </div>
    )
}
export default Header;