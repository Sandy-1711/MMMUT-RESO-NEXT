import Navbar from '../(components)/Navbar/Navbar'
import contactcss from './contact.module.css'
export default function ContactPage() {
    return <>
        <Navbar />
        <div className={contactcss.main}>
            <h1>Contact Page</h1>
        </div>
    </>
}