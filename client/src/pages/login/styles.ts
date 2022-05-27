import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.loginBackground};
  height: 580px;
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