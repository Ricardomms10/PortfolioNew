/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Apresentacao, Home, React1, Divisao } from "./style";
import curriculo from "../assets/image/curriculo05.pdf"
import { Skill } from "../home/skill";

const Content = () => {

    return (
        <Home>
            <Apresentacao>

                <span>OI, EU SOU RICARDO </span>
                <Divisao>
                    <h1>REACT</h1>
                    <React1>
                        <a href="https://www.linkedin.com/in/ricardo-malta-632b70164/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href={curriculo} download title="Baixar Currículo"><i class="fa-regular fa-newspaper"></i></a>
                        <a href="https://github.com/Ricardomms10" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </React1>
                </Divisao>

                <h1>DEVELOPER </h1>
                <p> Tenho 29 anos e sou desenvolvedor front-end com 8 meses de experiência <br></br>trabalhando como freelancer.<br></br> Gosto de resolver problemas usando design e tecnologia. </p>
            </Apresentacao>
            <Skill />

        </Home >
    )

}

export { Content }