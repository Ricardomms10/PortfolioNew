/* eslint-disable jsx-a11y/anchor-is-valid */
import { Apresentacao, Home, Sobre } from "./style";
import MinhaFoto from "../image/foto minha.jpeg";
import curriculo from "../assets/curriculo.pdf"

const Content = () => {

  

    return (
        <Home>
            <Apresentacao>
                <img alt="Minha Foto" src={MinhaFoto} />
                <h1>OLÁ, EU SOU</h1>
                <span >RICARDO MALTA</span>
                <h2>DESENVOLVEDOR FRONT-END</h2>
                <br></br>
                <a href={curriculo} download>Baixar Curriculo</a>
            </Apresentacao>

            <Sobre>
                <div>
                    <h1>Sobre mim</h1>

                    <p><span>Olá! Meu nome é Ricardo, tenho 29 anos e sou natural de São Paulo - SP, mas cresci e atualmente moro no Litoral em Praia Grande-SP. Sou apaixonado por programação e estou em busca de uma carreira sólida na área de front-end. <br /></span>

                        <span> Tenho me dedicado intensamente aos estudos, aprimorando minhas habilidades em linguagens de programação como JavaScript, HTML, CSS e entre outras. Estou empenhado em adquirir cada vez mais conhecimento e habilidades técnicas para criar interfaces incríveis e funcionais.</span>

                        <span> Estou ansioso para embarcar na minha primeira oportunidade profissional, onde poderei aplicar tudo o que aprendi até agora e, ao mesmo tempo, continuar aprendendo e crescendo na área. Tenho plena confiança de que com meu comprometimento e dedicação, posso contribuir de forma significativa em projetos desafiadores.</span>

                        <span>  Seja bem-vindo ao meu portfólio, onde você poderá explorar alguns dos meus projetos e acompanhar minha jornada como desenvolvedor front-end. Estou pronto para enfrentar novos desafios e criar soluções inovadoras. </span>
                    </p>

                   
                </div>
            </Sobre>
        </Home>
    )

}

export { Content }