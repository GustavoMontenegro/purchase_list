import React, {useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native';

import StyledButton from '../../components/modules/StyledButton';

import Label from '../../components/core/Label';

import {COLORS, STRINGS} from '../../config';

import {Container, ContainerButton} from './style';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    if (!isLogin) {
      setIsLogin(true);
    }
  };

  return (
    <>
      <SafeAreaView />
      <Container>
        <Label color={COLORS.primary}>Lista de compras</Label>
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
      </Container>
    </>
  );
};

export default LoginScreen;
