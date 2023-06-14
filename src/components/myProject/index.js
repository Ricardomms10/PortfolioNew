/* eslint-disable react/jsx-no-target-blank */
import  Pokemon  from "../image/capaSite.png"
import { Box, Container, Text, Title } from "./styled"

export const MyProject = () => (

    <Container>
        <Title>
            <h1> Projetos </h1>
            <p> Aqui estão alguns exemplos dos projetos que desenvolvi e estou trabalhando atualmente. <br /> Confira abaixo: </p>
        </Title>

        <Box>
            <Text>
            <a href="https://github.com/Ricardomms10/Projeto-Pokedex" target="_blank"> <h2>Projeto Pokédex</h2></a>
                <h4>API de Pokemons</h4>

                <p>
                Esta é uma aplicação web que permite pesquisar 
                Pokémons pelo nome ou ID. Ela oferece uma interface amigável onde você pode explorar o vasto mundo dos Pokémons e descobrir informações sobre suas criaturas favoritas.

             <br></br>
             <br></br>
                Utilizei nesse projeto React.Js, Styled Components.
                Todo Leiaute foi de minha autoria.
                </p>
            </Text>

            <div>
              <a href="https://github.com/Ricardomms10/Projeto-Pokedex" target="_blank"><img alt="Capa Site" src={Pokemon} /></a> 
            </div>
        </Box>

    </Container>

)