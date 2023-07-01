import './Header.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {

    return (
        <div className="header">
            <div className="header__wrapper">
                <img src={logo} alt="Logo"/>
                <div className="header__links">
                    <p>О проекте</p>
                    <p>Расписание</p>
                    <p>Команды</p>
                    <p>Организаторы</p>
                    <p>Контакты</p>
                    <p className="header__links__register">Стать участником</p>
                </div>
            </div>
        </div>
    )

}

export default Header