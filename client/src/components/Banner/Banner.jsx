import './Banner.css'
import logo_3d from '../../assets/images/banner/3d_day_logo.png'

const Banner = () => {

    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__wrapper__logo">
                    <img src={logo_3d} alt="3d-day-logo"/>
                </div>

                <div className="banner__wrapper__text">
                    <h2>Всероссийский конкурс
                        по скоростному трехмерному
                        моделированию и визуализации
                    </h2>
                    <h1>3D день и 3D ночь</h1>
                </div>
            </div>
            <div className="banner_wrapper__footer">
                <h4>Саратов, 1-14 июня 2023</h4>
            </div>
        </div>
    )

}

export default Banner