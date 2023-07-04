import React, {useState} from 'react';
import './SideBar.css'
import EditLogo from '../../assets/images/profile/Edit.svg'
import NotificationLogo from '../../assets/images/profile/Notifications.svg'
import TeamLogo from '../../assets/images/profile/team.svg'
import SidebarDefaultAvatar from '../../assets/images/profile/default_avatar.svg'

const SideBar = ({setActiveTab}) => {


    const handleSelect = (e) => {
        document.querySelectorAll(".sideBar_icon").forEach(item => {
            item.classList.remove("sidebar__img__active")
        })
        const image = e.currentTarget.querySelector('.sideBar_icon').classList.add("sidebar__img__active")

        setActiveTab(e.currentTarget.getAttribute("position"))
    }

    return (
        <div className='sidebar__content'>
            <span className="sidebar__user__avatar">
                <img className="sidebar__user__avatar__img" src={SidebarDefaultAvatar} alt="user_avatar"/>
            </span>
            <div className='sidebar__content__element' onClick={handleSelect} position="0">
                <span className="sidebar__element__img">
                     <img className="sideBar_icon" src={EditLogo} alt="edit-icon"/>
                </span>
                <span className="sidebar__element__text">
                    Основное
                </span>
            </div>
            <div className='sidebar__content__element' onClick={handleSelect} position="1">
                <span className="sidebar__element__img">
                     <img className="sideBar_icon" src={NotificationLogo} alt="notification-icon"/>
                </span>
                <span className="sidebar__element__text">
                    Уведомления
                </span>
            </div>
            <div className='sidebar__content__element' onClick={handleSelect} position="2">
                <span className="sidebar__element__img">
                     <img className="sideBar_icon" src={TeamLogo} alt="team-icon"/>
                </span>
                <span className="sidebar__element__text">
                    Команда
                </span>
            </div>


        </div>
    );
};

export default SideBar;