import styled from "styled-components";

export const HeadContainer  = styled.header`
   display:flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;
   align-items: center;
   background-color: #fff;
   position: fixed;
   top:0;
   width: 100%;

   @media (max-width: 890px) {
    
   
  }
`

export const LogoContainer = styled.div`
  display: flex;
  margin-left: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    color:#000;
    border-radius: 100px;
    padding: 10px;
    margin: 3px;
    width: 50px;
    text-decoration: none;
    &:hover{
      color:#4B0082;
    }  
  }

  @media (max-width: 890px) {
    margin-bottom: 10px;
  }
`;


export const MenuContainer = styled.ul`
    display: flex;
    list-style: none;
    gap:30px;
    margin-right: 10px;

    @media (max-width: 890px) {
      display: none; /* Oculta o menu */
    }
  
    }
`

export const TextMenu = styled.li`
   font-family: 'play', sans-serif;
   font-weight: bold;
   font-size:25px;
   color:#000;
  &:hover{
    color:#4B0082;
  } 


`

export const HamburgerIcon = styled.head`
  display: none;
  cursor: pointer;

  @media (max-width: 890px) {
    display: block;
    font-size: 25px;
    color: #000;
    padding: 10px;
    margin-right: 10px;
    &:hover {
      color: #4b0082;
    }
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  display: none;
  p{
    font-size:15px;
    font-weight: bold;
  }
  &: hover{
    color: #4b0082;
  }
`;

export const OverlayMenu = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  z-index: 10;

  ${MenuLink} {
    display: block;
  }
`;