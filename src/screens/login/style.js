import {SPACING} from '../../config';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;

  background-color: transparent;
`;

export const ContainerButton = styled.View`
  flex: 1;

  padding-left: ${SPACING.small};
  padding-right: ${SPACING.small};

  margin-top: ${SPACING.huge};
  margin-left: ${SPACING.huge};
`;

export const ContainerForm = styled.View`
  flex: 1;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
`;

export const ContainerTitle = styled.View`
  flex: 0.5;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSign = styled.View`
  flex: 0.5;

  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
  justify-content: space-between;
  align-items: center;
`;
