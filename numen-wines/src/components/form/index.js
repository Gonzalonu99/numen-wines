import useForm from "../../hooks/use-form";

import {InputLayoutDiv, LayoutDiv, StyledForm, FormContainer, StyledH2} from "./styles";
import Input from "./Input";

const Form = () => {
  const {state, onInputChange, onInputBlur, onFormSubmit} = useForm(["name", "lastName", "email"]);

  return (
    <StyledForm id="form">
      <FormContainer>
        <LayoutDiv>
          <StyledH2><span>ÚNETE</span>  A NOSOTROS</StyledH2>
          <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
        </LayoutDiv>
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <InputLayoutDiv>
            <Input
              hasError={state.name.hasError}
              id="name"
              label="Nombre"
              type="text"
              val={state.name.val}
              onBlur={onInputBlur}
              onChange={onInputChange}
            />
            <Input
              hasError={state.lastName.hasError}
              id="lastName"
              label="Apellido"
              type="text"
              val={state.lastName.val}
              onBlur={onInputBlur}
              onChange={onInputChange}
            />
          </InputLayoutDiv>
          <Input
            hasError={state.email.hasError}
            id="email"
            label="Email"
            type="email"
            val={state.email.val}
            onBlur={onInputBlur}
            onChange={onInputChange}
          />
          <button>ENVIAR</button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;