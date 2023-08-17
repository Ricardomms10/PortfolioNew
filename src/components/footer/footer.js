import React, { useState } from 'react';
import { Container, Div1, Div2 } from "./styled";

 export const Footer = () => {
  const [copiado, setCopiado] = useState(false);

  const email = 'RICARDOMMS10@GMAIL.COM';

  const copiarEmail = () => {
    
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
  };

  

  return (
    <Container>
      <Div1>
        <h1><i className="fa-solid fa-envelope-open-text"></i></h1>
        <h2>ME MANDE UM EMAIL</h2>
      </Div1>

      <Div2 copiado={copiado}>
        <h3>{email}</h3>
        <button onClick={copiarEmail}>
          <h2 className="clickable-element">
            {copiado ? 'EMAIL COPIADO!' : 'COPIAR EMAIL'}
          </h2>
        </button>
      </Div2>
    </Container>
  );
};


