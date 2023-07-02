import './Organizers.css'
import sstu_logo from '../../assets/images/sstu_logo.svg'
import inpit_logo from '../../assets/images/inpit_logo.svg'

const Organizers = () => {

    return (
        <div className="organizers">
            <div className="organizers__header">
                <h3>Организаторы</h3>
            </div>
            <div className="organizers__wrapper">

                <div className="organizers__wrapper__content">
                    <a href="https://www.sstu.ru/" target="_blank">
                        <img src={sstu_logo} alt="Sstu logo"/>
                    </a>
                    <a href="https://inpit.sstu.ru/home.php" target="_blank">
                        <img src={inpit_logo} alt="Inpit logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Organizers
