'use client'
import navbar from './Navbar.module.css'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
    return <header className={navbar.navbar}>
        <div className={navbar.navwrap} id='wrapper'>

            <div className={navbar.logo}>
                <img src='https://mmmut.xyz/img/logo.gif' />
            </div>
            <div onClick={function () {
                const cross = document.querySelector(`.${navbar.cross}`)
                const menu = document.querySelector(`.${navbar.menu}`)
                const links = document.querySelector(`.${navbar.links}`)
                cross.style.display = "block";
                menu.style.display = "none";
                links.style.transform = "translate(0)";

            }} className={navbar.menu}>
                <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <div onClick={function () {
                const cross = document.querySelector(`.${navbar.cross}`)
                const menu = document.querySelector(`.${navbar.menu}`)
                const links = document.querySelector(`.${navbar.links}`)
                cross.style.display = "none";
                menu.style.display = "block";
                links.style.transform = "translate(100%)";

            }} className={navbar.cross}>
                <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </div>
            <div className={navbar.links}>
                <ul>
                    <a href='/ojoia'><li><div><FaDownload /><span className={navbar.download}> Download</span></div></li></a>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/pyq'}><li>PYQ</li></Link>
                    <Link href={'/contribute'}><li>Contribute</li></Link>
                    <Link href={'/team'}><li>Team</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    </header>
}