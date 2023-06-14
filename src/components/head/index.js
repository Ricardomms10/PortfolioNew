/* eslint-disable react/jsx-no-target-blank */
import { HamburgerIcon, HeadContainer, LogoContainer, MenuContainer, MenuLink, OverlayMenu, TextMenu } from "./styled"
import { useState } from "react";


const Head = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <HeadContainer>
      <LogoContainer>
        <a href="https://www.linkedin.com/in/ricardo-malta-632b70164/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Ricardomms10" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://api.whatsapp.com/send?phone=5513981199007" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      </LogoContainer>


      <MenuContainer>
        <a href="/">  <TextMenu>QUEM SOU</TextMenu></a>
        <a href="/Projeto">  <TextMenu>PROJETOS</TextMenu></a>
        <a href="/Contato"> <TextMenu>CONTATO</TextMenu></a>
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