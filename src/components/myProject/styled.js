import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
wigth:100%;
display: flex;
align-items: center;
flex-direction: column;
margin-top:10px auto;
`

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 360px;
`;


export const Box = styled.div`
  width: 100%;
  object-fit: cover;

 

img{
  display: block;
  max-width: 100%; /* Ajusta automaticamente a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  object-fit:cover;
  padding:10px;
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