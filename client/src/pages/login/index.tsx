import {
  Container,
  Infos,
  LoginInfo,
  LoginPhrase,
  PasswordSettings,
  SignupText
} from './styles';

export const Login: React.FC = () => {

  return (
    <Container>
      <Infos>
        <LoginPhrase>
          <p>Ícone</p>
          <h3>Faça seu login</h3>
        </LoginPhrase>
        <LoginInfo>Entre com suas informações de cadastro</LoginInfo>
        <p>Inputs do ant design</p>
        <PasswordSettings>
          <span>Checkbox do antd</span>
          <p>Esqueci minha senha</p>
        </PasswordSettings>
        <p>Botão do antd</p>
        <SignupText>Não tem uma conta? <span>Registre-se</span></SignupText>
      </Infos>
    </Container>
  );
}