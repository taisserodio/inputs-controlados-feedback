import React from 'react'
import { Form, Input } from '../MainPage/styles'

const ConfirmationForm = () => {
  const [data, setData] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirm] = useState("")


  const onChangeData = (event) => {
    setData(event.target.value)
  }

  const onChangeTelefone = (event) => {
    setTelefone(event.target.value)
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
    <Form>
      <label>
        Data De Nascimento:
        <Input placeholder="Data" value={data} onChange={onChangeData} />
      </label>
      <label>
        Telefone:
        <Input placeholder="Telefone" value={telefone} onChange={onChangeTelefone} />
      </label>
      <label>
        Como voce se identifica?:
        {/* <Input placeholder="gênero" value={props.genero} onChange={props.onChangeEmail} /> */}
        <select>
          <option value="1">Homem cisgênero</option>
          <option value="2">Mulher cisgênero</option>
          <option selected value="3">Homem trans</option>
          <option value="4">Mulher trans</option>
          <option value="5">Pessoa não binária</option>
          <option value="6">Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Como voce se autodeclara?:
        {/* <Input placeholder="gênero" value={props.genero} onChange={props.onChangeEmail} /> */}
        <select>
          <option value="1">Negro</option>
          <option value="2">Pardo</option>
          <option selected value="3">Branco</option>
          <option value="4">Amarelo</option>
          <option value="5">indígena</option>
          <option value="6">Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Curso:
        <div>
          <input type="radio" id="integral" name="1" value="Integral" />
          <label for="integral">Curso integral web fullstack</label><br />
          <input type="radio" id="noturno" name="2" value="Noturno" />
          <label for="noturno">Curso noturno web fullstack</label><br />
        </div>
      </label>
      <label>
        Escolaridade:
        <div>
          <input type="checkbox" id="ensinoMedio" name="1" value="ensinoMedio" />
          <label for="ensinoMedio">Possui ensino medio completo?</label><br />
        </div>
      </label>
      <label>
        Disponibilidade de Horario:
        <div>
          <input type="checkbox" id="horario" name="1" value="horario" />
          <label for="horario">Tem disponibilidade de horario?</label><br />
        </div>
      </label>
      <button onClick={props.sendData}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm