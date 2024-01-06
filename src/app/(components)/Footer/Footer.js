import Link from 'next/link'
import { FaHome, FaInstagram, FaLinkedin, FaPersonBooth, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io"
import style from './style.module.css'
export default function Footer() {
    return <footer className={style.footer}>
        <div className={style.footerWrap} id="wrapper">
            <div className={style.logotext}>
                <img src='https://mmmut.xyz/img/logo.gif' />
                <p>Our motive is to support our community juniors and share our valuable knowledge and resources to everyone.✨</p>
            </div>
            <div className={style.links}>
                <ul>
                    <li>
                        <Link href={'/'}>
                            <FaHome />
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link href={'/team'}>
                            <RiTeamFill />
                            Team
                        </Link>

                    </li>
                    <li>
                        <Link href={'/team'}>
                            <IoMdContact />
                            Contact Us
                        </Link>

                    </li>
                </ul>
            </div>
            <div className={style.socials}>
                <p>Reach us</p>
                <div>
                    <a href='www.instagram.com/mmmut.xyz/'>
                        <FaInstagram />
                    </a>
                    <a href='www.instagram.com/mmmut.xyz/'>
                        <FaWhatsapp />
                    </a>
                    <a href='www.instagram.com/mmmut.xyz/'>
                        <FaLinkedin />
                    </a>
                    <a href='www.instagram.com/mmmut.xyz/'>
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div className={style.about}>
                <h2>About Us</h2>
                <p>A best team is not a group of best players, its a group that plays best together.</p>
            </div>
        </div>
    </footer>
}