import styled from "styled-components";

export const Home = styled.section`
    display: flex;
   align-items: start;
   justify-content: center;
   margin-top:80px;
   padding:90px;
   box-sizing: border-box;
   gap:10px;
   height: 100vh; 
  
`;

export const Apresentacao = styled.div`


  h1 {
    justify-content: start;
    color: #ffF;
    font-family: 'Inter', sans-serif;
    font-size: 150px;
    line-height: 0.80;
   
  }

  span {
    padding-left:10px;
    color: 	#fff;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 700;
   
  }

 p{
  margin-top:10px;
    display:flex;
    justify-content: end;
    color: #fff;
    font-family: 'Play', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  

  }

`;

export const React1 = styled.div`
display:flex;

align-items: center;
flex-direction: row;

a{
  
    margin-left: 20px;
    padding:15px ;
    color:#d6eb50;
    font-size:50px;
  
   
  
    &:hover{
     
     
    color:#FFF;
    cursor: pointer;
    transform: translatey(-10px);
   
  
}

`
