import styled from "styled-components";


export const Container = styled.div`
background: linear-gradient(to bottom, transparent 5%, #FFF 85%);
display:flex;
align-items: center;
bottom: 0;
width: 100%;
height:300px;
justify-content: center;
flex-direction: column;
gap:15px;
`

export const Div1 = styled.div`
justify-content: center;
display:flex;
align-items: center;
flex-direction: column;
font-size: 15px;
gap:10px;
font-family: 'play', sans-serif;
margin-top: 60px;
`

export const Div2 = styled.div`
justify-content: center;
display:flex;
align-items: center;
flex-direction: column;
font-size: 13px;
font-family: 'play', sans-serif;

h3{
background-color: ${props => (props.copiado ? '#53d475' : '#f5f1e9')};
border:solid #000 1px;
padding:10px 80px;
animation:ease-in 2s;


}

h2{
  background: linear-gradient(to bottom,#f5f1e9 20%, #e3ceed 60%);
  border:solid #000 1px;
  padding:10px 80px;


  &:hover{
  cursor: pointer;
}
}
`

