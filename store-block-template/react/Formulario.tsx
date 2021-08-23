import React, { useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import axios from 'axios';

const CSS_HANDLES = [
  "container",
  "form",
  "fieldset",
  "label",
  "input",
  "bttnSubmit",
  "nome",
  "email",
  "telefone",
];

interface FormularioProps {}

const Formulario: StorefrontFunctionComponent<FormularioProps> = ({}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");


  function cadastrarLead() {
    let cadastroLead = {
      "nome": nome,
      "email": email,
      "telefone": telefone,
    };

    const api_url = "https://1wo1p40aq0.execute-api.us-east-2.amazonaws.com/items"
    axios.put(api_url, cadastroLead)
  }

  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={`${handles.container} ${handles.nome} tc`}>
      <h1 className={`${handles.h1}`}>Cadastre-se para receber novidades!</h1>
      <form className={`${handles.form} form-app tc`} action="">
        <div className={`${handles.fieldset}`}>
          <label className={`${handles.label}`} htmlFor="nome">
            Nome
          </label>
          <input
            value={nome}
            onChange={(e) =>setNome(e.currentTarget.value)}
            className={`${handles.input}`}
            id="nome"
            type="text"
            name="nome"
            required
          />
        </div>

        <div className={`${handles.fieldset} ${handles.email}`}>
          <label className={`${handles.label}`} htmlFor="email">
            E-mail:
          </label>
          <input
            value={email}
            onChange={(e) =>setEmail(e.currentTarget.value)}
            className={`${handles.input}`}
            id="email"
            type="email"
            name="email"
            required
          />
        </div>

        <div className={`${handles.fieldset} ${handles.telefone}`}>
          <label className={`${handles.label}`} htmlFor="telefone">
            Telefone
          </label>
          <input
            className={`${handles.input}`}
            onChange={(e) =>setTelefone(e.currentTarget.value)}
            value={telefone}
            id="telefone"
            type="tel"
            name="telefone"
            required
          />
        </div>

        <button
          onClick={cadastrarLead}
          className={`${handles.bttnSubmit}`}
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

/*Formulario.schema = {
  title: "editor.formulario.title",
  description: "editor.formulario.description",
  type: "object",
  properties: {},
};*/

export default Formulario;
