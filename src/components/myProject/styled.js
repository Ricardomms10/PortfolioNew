import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
margin-top:10px;
padding:20px 20px 30px 20px;

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
  margin:20px 0px 20px 0px;
  box-sizing: border-box;
  width: 850px;
  height: 450px;

 
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
  
    @media (max-width: 890px) {
        width: 100%; /* Ajusta a largura para ocupar 100% do container */
        height: auto;

    }

 
}


`

export const Text = styled.div`
  text-align: center;
  padding:10px;
  height: 100%;


  p{
    font-family: 'Play', sans-serif;
    font-size:15px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color:#dbcdcc;
    
} 

h1{
    font-size:25px;
    font-family: 'Play', sans-serif;
    color:#dbcdcc;
    font-weight: bold;
}


`