
import Js from '../image/js.png'
import Ts from '../image/ts.png'
import ReactIcon from '../image/icons8-reagir-50.png'
import Mysql from '../image/my sql.png'
import Npm from '../image/npm.png'
import Git from '../image/git.png'
import GitHub from '../image/github.png'
import Css from '../image/css.png'
import Html from '../image/html.png'
import StyledIco from '../image/styled compo.png'
import Material from '../image/material iu.png'
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