import './Header.css'
import logo from '../../assets/images/logo.svg'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <div className="header">
            <div className="header__wrapper">
                <img src={logo} className="header_link" alt="Logo" onClick={handleLogoClick}/>
                <div className="header__links">
                    <p className="header_link">О проекте</p>
                    <p className="header_link">Расписание</p>
                    <p className="header_link">Команды</p>
                    <p className="header_link">Организаторы</p>
                    <p className="header_link">Контакты</p>
                    <p className="header__links__register header_link">Стать участником</p>
                </div>
            </div>
        </div>
    )

}

export default Header