import { BoxInputs, Boxbtn, Container, Mensagem } from "./styled"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export const ContatoInputs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    


    function sendEmail(e){
        e.preventDefault();

        if(name === ''  || email === '' || message === ''){
            alert("Preencha todos os campos.");
            return;
        }

        const templeteParams = {
            from_name:name,
            message: message,
            email:email
        }

        emailjs.send("service_qnxvi3w", "template_sumymss", templeteParams, "dmyVl9GE_nOv2TS9r")
      .then(( )  => {
        setEmail('')
        setName('')
        setMessage('')
      }, () =>{
        
      })
        

    }

    return (
        <Container>
            <h1> Contato </h1>

            <BoxInputs onSubmit={sendEmail}>
                <div>
                    <p>Nome e Sobrenome:</p>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <p>E-mail:</p>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>


                <Mensagem>
                    <p>Mensagem: </p>
                    <input
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}

                    />
                </Mensagem>

                <Boxbtn>
                    <button> Enviar </button>
                </Boxbtn>

            </BoxInputs>



        </Container>
    )
}