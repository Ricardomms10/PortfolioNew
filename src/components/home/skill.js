
import Js from '../assets/image/js.png'
import Ts from '../assets/image/ts.png'
import ReactIcon from '../assets/image/icons8-reagir-50.png'
import Mysql from '../assets/image/my sql.png'
import Npm from '../assets/image/npm.png'
import Git from '../assets/image/git.png'
import GitHub from '../assets/image/github.png'
import Css from '../assets/image/css.png'
import Html from '../assets/image/html.png'
import StyledIco from '../assets/image/styled compo.png'
import Material from '../assets/image/material iu.png'
import { CustomSwiper, CustomSwiperSlide } from './styled'

export const Skill = () => {

    const data = [
        { id: '1', image: `${Js}` },
        { id: '2', image: `${Ts}` },
        { id: '3', image: `${ReactIcon}` },
        { id: '4', image: `${Mysql}` },
        { id: '5', image: `${Npm}` },
        { id: '6', image: `${Git}` },
        { id: '7', image: `${GitHub}` },
        { id: '8', image: `${Css}` },
        { id: '9', image: `${Html}` },
        { id: '10', image: `${StyledIco}` },
        { id: '11', image: `${Material}` },
    ]

    return (

        <CustomSwiper
            slidesPerView={6}
            pagination={{ clickable: true }}
        >
            {data.map((item) => (
                <CustomSwiperSlide key={item.id}>
                    <img
                        src={item.image}
                        alt='icone'
                    />
                </CustomSwiperSlide>
            ))}
        </CustomSwiper>

    )
}