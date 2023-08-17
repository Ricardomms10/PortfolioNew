import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 80px;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  height: 100vh;
`;

export const Apresentacao = styled.div`
  h1 {
    justify-content: start;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 150px; 
    line-height: 1;
  }

  span {
    padding-left: 10px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 12px; /* Reduzido o tamanho da fonte para dispositivos móveis */
    font-weight: 700;
  }

  p {
    margin-top: 10px;
    display: flex;
    justify-content: end;
    color: #fff;
    font-family: 'Play', sans-serif;
    font-size: 11px; /* Reduzido o tamanho da fonte para dispositivos móveis */
    font-weight: 700;
    flex-wrap: wrap;
  }

@media (max-width: 768px){
  h1{
    font-size: 40px; 
  }
}

`;



export const React1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    margin-left: 10px; /* Reduzido o espaçamento para dispositivos móveis */
    padding: 10px; /* Reduzido o padding para dispositivos móveis */
    color: #d6eb50;
    font-size: 30px; /* Reduzido o tamanho da fonte para dispositivos móveis */

    &:hover {
      color: #fff;
      cursor: pointer;
      transform: translateY(-5px);
    }
  }

  /* Media query para telas menores, como celulares */
  @media (max-width: 768px) {
    align-items: flex-start;

    a {
      margin: 5px 0;
    }
  }
`;

export const Divisao = styled.div`
display:flex;
 flex-direction: row;
 align-items: center;

 @media (max-width: 768px){
   flex-direction:column-reverse;
    align-items: flex-start;
 }
`