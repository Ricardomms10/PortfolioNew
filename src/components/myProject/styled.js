import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
margin-top:100px;
padding:20px

`

export const Title =  styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top:15px;

h1{
    color:#FFF;
    font-size:35px;
    font-family: 'Play', sans-serif;
    font-weight: 700;
}

p{
    margin-top:10px;
    color:#FFF;
    font-family: 'Play', sans-serif;
    font-size:15px;
    padding:10px;
}
`

export const Box = styled.div`
  display:flex;
  gap:20px;
  background-color:#fff;
  margin:20px 0px 20px 0px;
  box-sizing: border-box;
  width: 750px;
  height: 350px;
  border: 1px solid black;
 
  @media (max-width: 890px) {
    flex-direction: column;
    width: 350px;
    height: 400px;
  }

  @media (max-width: 415px) {
    width: 250px;
    height: 450px;
  
    
}

img{
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    &:hover{
        border: solid #000 3px;
        
    }
    @media (max-width: 890px) {
        width: 100%; /* Ajusta a largura para ocupar 100% do container */
        height: auto;

    }

   
}

    
`

export const Text = styled.div`
  text-align: center;
  padding:30px;
  height: 100%;
  overflow: auto;

h2{
    font-size:25px;
    font-family: 'Play', sans-serif;
    color:#000;
    &:hover{
        color:#4B0082;
    }
}

h4{
    margin-top:5px;
    font-size:15px;
    font-family: 'Play', sans-serif;
    color:#696969;
}

p{
    
    margin-top:15px;
    font-size:15px;
}
`