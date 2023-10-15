import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";


export const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  display:flex;
  flex-direction:column;
  align-items: center;

  h4{
    margin-top:30px;
    color:#c2c4d1;
    font-family: 'Play', sans-serif;
    font-size:20px;
    letter-spacing:4px;

  }
`

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 40px;

  
  @media (max-width: 945px) {
    margin-top:30px;
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 70px;

img{
    display: block;
    max-width: 100%; /* Ajusta automaticamente a largura da imagem */
    height: auto; /* Mantém a proporção da imagem */
    object-fit:cover;
    padding:10px;
  }
  
`;


