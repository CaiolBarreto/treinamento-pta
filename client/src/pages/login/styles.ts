import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Form, Button, Checkbox } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.loginBackground};
  height: 480px;
  width: 580px;
  border-radius: 5px;
  color: white;
`;

export const Infos = styled.div`
  height: 80%;
  width: 70%;

  h3 {
    color: ${theme.colors.title};
    font-size: 24px;
  }
`;

export const LoginInfo = styled.p`
  color: ${theme.colors.text};
  margin: 12px 0px 27px;
  font-weight: 500;
`;

export const LoginPhrase = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: bold !important;
`;

export const PasswordSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0px;

  p {
    color: ${theme.colors.yellow};
    font-weight: 600;
  }
`;

export const SignupText = styled.p`
  text-align: center;
  color: ${theme.colors.yellow};

  span {
    font-weight: 600;
  }
`;

export const FormStyled = styled(Form)`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  label{
    color: #AFB6C2;
    font-size: 16px;
  }
  .ant-form-item{
    display: flex;
    flex-direction: column;
  }
  input {
    width: 335px;
    height: 37px;
    background-color: transparent !important;
    color: white;
  }
  svg {
    color: white;
  }
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  background-color: #FFC632;
  color: #473404;
  border: none;
  padding: 12px 24px;
  height: 51px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  &:hover{
    background: black;
  }
`

export const CheckboxStyled = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #FFC632;
  }
  background-color: transparent !important;
`

export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  color: #FFC632;
`
