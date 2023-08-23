/* eslint-disable react/jsx-no-target-blank */
import Pokemon from "../image/novo.png"
import { Box, Container, Text, Title } from "./styled"
import Cilios from "../image/pxcilios.png"

export const MyProject = () => (

    <Container>
        <Title>
            <h1> Projetos </h1>
            <p> Aqui estão alguns exemplos dos projetos que desenvolvi e estou trabalhando atualmente. <br /> Confira abaixo: </p>
        </Title>

        <Box>
            <div>
                <a href="https://github.com/Ricardomms10/Projeto-Pokedex" target="_blank"><img alt="Capa Site" src={Pokemon} /></a>
                <Text>
                    <p>POKEAPI</p>
                    <h1>UMA POKEDEX</h1>
                </Text>
            </div>

            <div>
                <a href="/" target="_blank"><img alt="Capa Site" src={Cilios} /></a>
                <Text>
                    <p>PROJETO CILIOS</p>
                    <h1> AGENDAMENTO DE CLIENTES</h1>
                </Text>
            </div>
        </Box>

    </Container>

)