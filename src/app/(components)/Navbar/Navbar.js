import navbar from './Navbar.module.css'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
    return <header className={navbar.navbar}>
        <div className={navbar.navwrap} id='wrapper'>

            <div className={navbar.logo}>
                <img src='https://mmmut.xyz/img/logo.gif'/>
            </div>
            <div className={navbar.links}>
                <ul>
                    <a href='/ojoia'><li><div><FaDownload /></div></li></a>
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