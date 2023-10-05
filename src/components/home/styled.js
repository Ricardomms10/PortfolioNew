import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;

`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 50px;

img{
    display: block;
    max-width: 100%; /* Ajusta automaticamente a largura da imagem */
    height: auto; /* Mantém a proporção da imagem */
    object-fit:cover;
    padding:10px;
  }
  
`;


