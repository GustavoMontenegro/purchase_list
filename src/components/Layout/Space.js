import styled from 'styled-components/native';

const Space = styled.View`
  flex: ${({ flex }) => flex || 1};
  height: ${({ height }) => height || '20'}px;
`;

export default Space;
