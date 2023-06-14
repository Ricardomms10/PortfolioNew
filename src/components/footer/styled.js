import styled from "styled-components";


export const Container = styled.div`
background-color:#fff;
display:flex;
align-items: center;
justify-content: space-between;
bottom: 0;
left: 0;
width: 100%;
padding:20px;

`

export const RedesBox = styled.div`
display: flex;
justify-content: space-evenly;
gap:30px;


div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 20px;
      text-align: center;
    }

    p {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 890px) {
  
    flex-direction: column;
   
  }

  @media (max-width: 375px) {
    margin-bottom:-15px;
  }
`;

