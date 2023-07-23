/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Apresentacao, Home, React1 } from "./style";

import curriculo from "../assets/curriculo.pdf"

const Content = () => {



    return (
        <Home>
            <Apresentacao>


                <span>OI, EU SOU RICARDO </span>

                <React1>
                    <h1>REACT</h1>
                    <a href="https://www.linkedin.com/in/ricardo-malta-632b70164/"  target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href={curriculo} download title="Baixar Currículo"><i class="fa-regular fa-newspaper"></i></a>
                    <a href="https://github.com/Ricardomms10" target="_blank"><i class="fa-brands fa-github"></i></a>
                </React1>

                <h1>DEVELOPER </h1>
                <p> Tenho 29 anos e sou desenvolvedor front-end com 6 meses de experiência <br></br>trabalhando como freelancer.<br></br> Gosto de resolver problemas usando design e tecnologia. </p>
            </Apresentacao>


        </Home >
    )

}

export { Content }