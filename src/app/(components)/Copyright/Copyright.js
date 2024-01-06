import style from './style.module.css'
export default function Copyright() {
    return <div className={style.copy}>
        <div className={style.copyWrap} id="wrapper">
            <p>&copy;Copyright <span>MMMUT RESOURCES</span> | All rights reserved | designed with ❤️ by <span>MMMUT RESOURCES TEAM</span></p>
        </div>
    </div>
}