import teamcss from './team.module.css'
export default function TeamPage() {
    return (<div className={teamcss.main}>
        <h1>Our Mentors</h1>
        <div className={teamcss.cards}>
            <div className={teamcss.card}>
                <div className={teamcss.profile}>
                    <img />
                </div>
                <p>Prof. J.P. Saini</p>
                <span>Professor</span>
            </div>
            <div className={teamcss.card}>
                <div className={teamcss.profile}>
                    <img />
                </div>
                <p>Prof. S.P. Singh</p>
                <span>Professor</span>
            </div>
            <div className={teamcss.card}>
                <div className={teamcss.profile}>
                    <img />
                </div>
                <p>Dr. D.S. Singh</p>
                <span>Professor</span>
            </div>
        </div>
        <h1>Our Hardworking Developers</h1>
        <div className={teamcss.cards}>
            <div className={teamcss.card}>
                <div className={teamcss.profile}>
                    <img />
                </div>
                <p>Name</p>
                <span>Branch</span>
                <div className={teamcss.socials}></div>
            </div>
        </div>
    </div>)
}