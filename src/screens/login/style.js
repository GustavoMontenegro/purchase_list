import { SPACING } from '../../config';
import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: transparent;
`;

export const ContainerButton = styled.View`
  width: 100%;
  padding-left: ${SPACING.small};
  padding-right: ${SPACING.small};

  margin-top: ${SPACING.huge};
  margin-left: ${SPACING.huge};
`;