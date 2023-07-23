/* eslint-disable react/jsx-no-target-blank */
import { HamburgerIcon, HeadContainer,  MenuContainer, MenuLink, OverlayMenu, TextMenu } from "./styled"
import { useState } from "react";


const Head = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <HeadContainer>
     


      <MenuContainer>
        <a href="/">  <TextMenu><i class="fa-solid fa-house"></i></TextMenu></a>
        <a href="/Projeto">  <TextMenu>PROJETOS</TextMenu></a>
        
      </MenuContainer>

      <HamburgerIcon onClick={toggleMenu}>
        <i class="fa-sharp fa-solid fa-bars"></i>
      </HamburgerIcon>

      {isMenuOpen && (

        <OverlayMenu>
          <MenuLink href="/">  <p>QUEM SOU</p></MenuLink>
          <MenuLink href="/Projeto">  <p>PROJETOS</p></MenuLink>
          <MenuLink href="/Contato"> <p>CONTATO</p></MenuLink>
        </OverlayMenu>
      )}

    </HeadContainer>
  )
}

export { Head }