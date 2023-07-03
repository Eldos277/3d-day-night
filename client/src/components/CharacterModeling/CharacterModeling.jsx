import React from 'react'
import icon_3d from '../../assets/images/schedule/3d.png'
import circle from '../../assets/images/schedule/circle.png'
import dinner from '../../assets/images/schedule/dinner.png'
import class_logo from '../../assets/images/schedule/class.png'
import like from '../../assets/images/schedule/like.png'
import medal from '../../assets/images/schedule/medal.png'


const CharacterModeling = () => {
    const data22 = [
        {
            "time": "21:30 – 22:00",
            "img": circle,
            "text": "Регистрация участников",
        }, {
            "time": "22.00 – 01:00",
            "img": icon_3d,
            "text": "Выполнение заданий конкурс",
        }, {
            "time": "01:00 – 02:00",
            "img": dinner,
            "text": "Обед",
        }, {
            "time": "02:00 – 04:00",
            "img": circle,
            "text": "Выполнение заданий конкурса",
        }, {
            "time": "04:00 – 08:00",
            "img": circle,
            "text": "Размещение итоговых проектов в группе «3D-день и ночь СГТУ» ВКонтакте",
        }, {
            "time": "08:00",
            "img": like,
            "text": "Начало зрительского голосования в группе «3D-день и ночь СГТУ» ВКонтакте",
        }
    ]

    const data23 = [
        {
            "time": "18:00",
            "img": like,
            "text": "Окончание зрительского голосования в группе «3D-день и ночь СГТУ» ВКонтакте",
        }, {
            "time": "18:00 - 02:00",
            "img": class_logo,
            "text": "Проверка работ Экспертным советом Конкурса",
        }
    ]

    const data24 = [
        {
            "time": "15:00",
            "img": medal,
            "text": "Награждение победителей и призеров Конкурса. Награждение состоится по адресу: г. Саратов, ул. Политехническая, 77, Студенческий клуб СГТУ",
        },
    ]

    const data = [
        {
            "date": "22 апреля",
            "data": data22,
        },
        {
            "date": "23 апреля",
            "data": data23
        },
        {
            "date": "24 апреля",
            "data": data24
        }
    ]

    return (
        <div className="arch__content">

            {
                data.map((day, index) => {
                    return <div className="arch__content__card" key={index}>
                        <div className="arch__card__header">
                            <h4>{day.date}</h4>
                        </div>
                        <div className="arch__card__content">
                            {
                                day.data.map((item, index) => {
                                    return <React.Fragment key={index}>
                                        <div className="arch__content__element">
                                            <span className="arch__element__date">{item.time}</span>
                                            <span className="arch__element__img"><img src={item.img} alt="Img"/></span>
                                            <span className="arch__element__text">{item.text}</span>
                                        </div>
                                    </React.Fragment>
                                })
                            }
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default CharacterModeling