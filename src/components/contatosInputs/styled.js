import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
display:flex;
flex-direction: column;
align-items: center;
margin-top:100px;
padding:20px;
height: 100vh; 

h1{
    color:#fff;
    font-size:35px;
    margin:10px;
}

@media (max-width: 890px) {
  overflow: auto;

}


`

export const BoxInputs = styled.form`
  display:flex;
  flex-direction: column;
  flex:1;
  margin-top:20px;
  gap:20px;
  

  input{
    border:solid 1px #000;
    border-radius:10px;
    padding: 10px 10px 10px 10px;
    width:500px;
    overflow: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

    @media (max-width: 890px) {
      width:100%;

  
    }
  }
  p{
    font-size:15px;
    font-weight: bold;
    font-family:'play'; 
    color:#FFF;
    padding:3px;
 }


 @media (max-width: 890px) {
  

  
}
`

export const Mensagem = styled.div`

input{
    margin-top:5px;
    padding: 10px 10px 35px 10px;
    
}
`

export const Boxbtn = styled.div`
display:flex;
justify-content: center;

button{
    padding:10px 20px;
    border-radius:50px;
    font-size:20px;
    font-weight: bold;
    font-family:'inter'; 
    background-color:#BA55D3;
    color:#fff;
    border: solid 1px #000;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    &:hover{
        color:#000;
        border: solid 1px #000;
        background-color:#FFF;
        cursor: pointer;
    }
}


`