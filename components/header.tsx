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
      if (props.dark) {
        darkString = " text-black";
      }  
      if (navTrans == true) {
            return "navbar top-0 z-50 bg-transparent" + darkString;
        } 
        return "navbar bg-primary-content sticky top-0 z-50" + darkString;
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    )
}
export default Header;