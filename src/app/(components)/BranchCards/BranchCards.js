import style from './style.module.css'
export default function BranchCards() {
    
    return <div className={style.branchCards}>
        <div className={style.branchWrap} id="wrapper">
            <div className={style.tabs}>
                <ul>
                    <li className={style.active}>Notes</li>
                    <li>PYQs</li>
                    <li>Lectures</li>
                    <li>Student</li>
                </ul>
            </div>
            <div id='notestabcards' className={style.cards}>
                <div className={style.card}>
                    <img />
                    <p>CSE</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>IT</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>ECE</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>IOT</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>EE</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>CIVIL</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MECH</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>CHEM</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BPHARMA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MCA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BBA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MBA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MSC</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MTECH</p>
                </div>

            </div>
            <div id='pyqtabcards' className={style.cards}>
                <div className={style.card}>
                    <img />
                    <p>BTECH</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MCA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BPHARMA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BBA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MBA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MTECH</p>
                </div>

            </div>
            <div id='lecturetabcards' className={style.cards}>
                <div className={style.card}>
                    <img />
                    <p>BTECH</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MTECH</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BPHARM</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MCA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>BBA</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>MBA</p>
                </div>
            </div>
            <div id='studenttabcards' className={style.cards}>
                <div className={style.card}>
                    <img />
                    <p>Register</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Syllabus</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Result</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Calender</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Cutoff</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Fee</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Contribute</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Placement</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>TimeTable</p>
                </div>
                <div className={style.card}>
                    <img />
                    <p>Alumni</p>
                </div>

            </div>
        </div>
    </div>
}