import styled from "styled-components";

export const Home = styled.section`
    display: flex;
   align-items: start;
   justify-content: center;
   margin-top:80px;
   padding:90px;
   box-sizing: border-box;
   gap:10px;
   height: 100%; 
  
 
  @media (max-width: 890px) {
    align-items: flex-start;
    flex-direction: column;
    padding:20px;
   
  }
`;

export const Apresentacao = styled.div`
   text-align: center;
   background-color:#999;
   width:35%;
   height: auto;
   padding: 10px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
   justify-content: center;
   align-items: center;
   display:flex;
   flex-direction: column;

  h1 {
    justify-content: start;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
   
  }

  span {
    padding-left:10px;
    justify-content: center; 
    text-align: center; 
    color: 	#4B0082;
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: 700;
    overflow: hidden;
    
    
  }

  h2 {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
  }
  img{
    border-radius: 50%;
    border: solid 3px #FFF;
    margin: 15px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  a{
    background-color:#4B0082;
    padding:10px;
    border-radius:10px;
    color:#FFF;
    font-size:15px;
    font-weight: bold;
  }

  @media (max-width: 890px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
    position:static;
  
  }
`;

export const Sobre = styled.div`
  background-color: #fff;
  flex:1;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);

div{
  padding:0 50px 50px 50px;
  margin-top:20px;
}

h1{
  font-size:40px;
  font-family: 'inter', sans-serif;
  font-weight: 700;
}

p{
  font-size:20px;
  font-family: 'Play', sans-serif;
  margin-top:20px;
  span {
    display: block;
    margin-bottom: 20px; 
  }
}



@media (max-width: 890px) {
  max-width: 100%;
  margin-left: 0px;
}

`
