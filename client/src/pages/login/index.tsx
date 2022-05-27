import {
  Container,
  Infos,
  LoginInfo,
  LoginPhrase,
  PasswordSettings,
  SignupText,
  ButtonStyled,
  FormStyled,
  CheckboxStyled,
  Settings,
} from './styles';
import { Form, Input, Button, Checkbox } from 'antd';
import {
  LoginIn,
  Mail,
  Lock,
} from '../../assets'

export const Login: React.FC = () => {

  return (
    <Container>
      <Infos>
        <LoginPhrase>
          <img src={LoginIn} alt="login" />  
          Faça seu login
        </LoginPhrase>
        <FormStyled>
            <br></br>
            
            <Form.Item>
              <Input prefix={<img src={Mail} alt='mail icon'/>} 
                placeholder='Digite seu e-mail'
                style={{backgroundColor: "transparent"}}
              />
            </Form.Item>

            <Form.Item>
              <Input.Password prefix={<img src={Lock} alt='mail icon'/>} 
                placeholder='Digite sua senha'
                style={{backgroundColor: "transparent"}}
              />
            </Form.Item>

            <Form.Item>
              <Settings>
                <CheckboxStyled>
                  Lembre-me
                </CheckboxStyled>
                Esqueci minha senha
              </Settings>
            </Form.Item>

            <Form.Item>
              <ButtonStyled type="primary" htmlType="submit" onClick={()=>console.log('hi')}>
                ENTRAR
              </ButtonStyled>
            </Form.Item>
          </FormStyled>
        <SignupText>Não tem uma conta? <span>Registre-se</span></SignupText>
      </Infos>
    </Container>
  );
}