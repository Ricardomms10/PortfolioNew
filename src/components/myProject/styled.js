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
  width: 350px;
  height: 300px;
`;


export const Box = styled.div`
  width: 100%;
  object-fit: cover;

img{
  display: block;
  max-width: 100%; 
  height: auto; 
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
export const Title = styled.div`
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
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 

`;

export const ModalContent = styled.div`
  background: white;
  border:5px solid #000;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  position: relative;

  h1{
    color:#000;
    font-family: 'Play', sans-serif;
    font-size:25px;
  }

  ul{
        padding:15px;
    li{
      display:flex;
      align-items: center;
      justify-content: center; 
      span{
        padding:2px;
        margin-right:4px;
        font-size: 18px;
      }
    }
  }

  
  div{
    span{
      font-size: 18px;
    }
  }


  img{
    max-width: 50%; /* A imagem não irá ultrapassar a largura do seu container */
     height: auto;     /* A altura se ajustará automaticamente */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  padding:3px 6px;
  color:#4a5059;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 2px solid #4a5059 ;
  border-radius:50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
`;

