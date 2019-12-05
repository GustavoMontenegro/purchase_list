import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { SafeAreaView } from 'react-native';

import StyledButton from '../../components/modules/StyledButton';

import { COLORS, STRINGS } from '../../config';

import Container from './style';
import ContainerButton from './style';

const LoginScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    if (!isLogin) {
      setIsLogin(true);
    }
  };

  const reset = () => {
    setIsLogin(false);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLORS.darkerPrimary }} />
      <Container>
        <ContainerButton>
          <StyledButton
            isLoading={isLoading}
            backgroundColor={COLORS.primary}
            onPress={() => login()}
            borderColor={COLORS.white}
            borderWidth={1}
            color={COLORS.white}
          >
            {STRINGS.login.signIn}
          </StyledButton>
        </ContainerButton>
      </Container>
    </>
  );
};

export default withNavigation(LoginScreen);
