import React from "react";
import { useCssHandles } from "vtex.css-handles";

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
            id="telefone"
            type="tel"
            name="telefone"
            required
          />
        </div>

        <button className={`${handles.bttnSubmit}`} type="submit">
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
