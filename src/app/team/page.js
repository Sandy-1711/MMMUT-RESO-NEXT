import teamcss from './team.module.css'
import { data } from './utils/team'
export default function TeamPage() {

    return (<div className={teamcss.main}>
        <div className={teamcss.teamWrap} id='wrapper'>

            <h1>Our Mentors</h1>
            <div className={teamcss.cards}>
                {data.mentors.map(function (item,index) {
                    return <div key={index} className={teamcss.card}>
                        <div className={teamcss.profile}>
                            <img src={item.src} />
                        </div>
                        <p>{item.name}</p>
                        <span>{item.position}</span>
                    </div>
                })}
            </div>
            <h1>Our Hardworking Developers</h1>
            <div className={teamcss.cards}>
                {data.dev.map(function (item,index) {
                    return <div key={index} className={teamcss.card}>
                        <div className={teamcss.profile}>
                            <img src={item.src} />
                        </div>
                        <p>{item.name}</p>
                        <span>{item.branch}</span>
                        <div className={teamcss.socials}>
                            <a href={item.linkedin}></a>
                            <a href={item.instagram}></a>
                            <a href={item.mail}></a>
                            <a href={item.whatsapp}></a>
                        </div>
                    </div>
                })}

            </div>
            <h1>Content Providers</h1>
            <div className={teamcss.cards}>
                {data.content.map(function (item,index) {
                    return <div key={index} className={teamcss.card}>
                        <div className={teamcss.profile}>
                            <img src={item.src} />
                        </div>
                        <p>{item.name}</p>
                        <span>{item.branch}</span>
                        <div className={teamcss.socials}>
                            <a href={item.linkedin}></a>
                            <a href={item.instagram}></a>
                            <a href={item.mail}></a>
                            <a href={item.whatsapp}></a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>)
}