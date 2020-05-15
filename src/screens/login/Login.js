import React, {useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native';

import StyledButton from '../../components/modules/StyledButton';

import Label from '../../components/core/Label';

import {COLORS, STRINGS} from '../../config';

import {
  Container,
  ContainerButton,
  ContainerForm,
  ContainerTitle,
  ContainerSign,
  Link,
} from './style';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [values, setValues] = useState({user: '', pass: ''});

  const login = () => {
    if (!isLogin) {
      setIsLogin(true);
    }
  };

  const setFieldValue = (index, value) => {
    console.log('teste');
  };

  return (
    <>
      <SafeAreaView />
      <Container>
        <ContainerTitle>
          <Label color={COLORS.primary}>Lista de compras</Label>
        </ContainerTitle>
        <ContainerForm />
        <ContainerButton>
          <StyledButton
            isLoading={false}
            backgroundColor={COLORS.primary}
            onPress={() => login()}
            borderColor={COLORS.white}
            borderWidth={1}
            color={COLORS.white}>
            {STRINGS.login.signIn}
          </StyledButton>
        </ContainerButton>
        <ContainerSign>
          <Label>Criar uma conta</Label>
        </ContainerSign>
      </Container>
    </>
  );
};

export default LoginScreen;
