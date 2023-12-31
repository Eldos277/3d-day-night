import './ErorPage.css'
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className="error_page">
            <h1>404</h1>
            <div className="error__text">
                Упс! Произошла какая-то ошибка, запрошенная страница не найдена!
            </div>
            <button className="error__back__button" onClick={handleNavigate}>
                <span className='error__back_button__text'>Вернуться на главную</span>
                <span className="error__back__button__arrow">
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="rollback" width="1em" height="1em"
                           fill="currentColor" aria-hidden="true"><path
                          d="M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"></path></svg>
                </span>
            </button>
        </div>
    )
}

export default ErrorPage