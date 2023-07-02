import './Schedule.css'
import {useState} from "react";
import Scheduler from "../../hoc/Scheduler";


const Schedule = () => {

    const [activeTab, setActiveTab] = useState(true)

    const handleSwitcher = (e) => {
        if (e.target.innerText === 'Архитектурная визуализация')
            setActiveTab(true)
        else
            setActiveTab(false)
    }

    return (
        <div className="schedule">
            <div className="schedule__header">
                <h3>План мероприятия</h3>
            </div>
            <div className="schedule__wrapper">

                <div className="schedule__wrapper__switcher">
                    <button onClick={handleSwitcher} className={activeTab ? 'active' : ''}>Архитектурная визуализация</button>
                    <button onClick={handleSwitcher} className={activeTab ? '' : 'active'}>Персонажное моделирование</button>
                </div>

                <Scheduler activeTab={activeTab}/>

            </div>
        </div>
    )
}

export default Schedule