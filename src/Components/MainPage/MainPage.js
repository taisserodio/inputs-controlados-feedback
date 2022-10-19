import React, { useState } from 'react'
import { MainContainer } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
  const [emailConfirm, setEmailConfirm] = useState("")

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeEmailConfirm = (event) => {
    setEmailConfirm(event.target.value)
  }

  const sendData = () => {
    if (age < "18") { //se a minha idade for menor que 18 anos
      alert("Usuario menor de 18 anos!")//a mensagem que vou exibir para o usuario
      return;
    }
    if (name.length <= "9" || name.length > "30") {//se o nome tiver menos que 10 ou mais que 30 caracteres
      alert("Nome fornecido é invalido!")
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      alert("Email invalido!")
      return;
    }
    if (!emailConfirm.includes("@") || !emailConfirm.includes(".com")) {
      alert("Confirmação de email invalida!")
      return;
    }
    if (email !== emailConfirm) {
      alert("Os emails não são iguais!")
      return;
    }
    setFormFlow(2)
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
        name={name}
        onChangeName={onChangeName}
        age={age}
        onChangeAge={onChangeAge}
        email={email}
        onChangeEmail={onChangeEmail}
        emailConfirm={emailConfirm}
        onChangeEmailConfirm={onChangeEmailConfirm}
        sendData={sendData}

      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage