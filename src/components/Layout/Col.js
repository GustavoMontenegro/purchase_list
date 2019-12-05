import styled from 'styled-components';

const Col = styled.View`
  flex-direction: column;
  flex: ${({ flex }) => flex || 1};
  width: ${({ width }) => width || 'auto'};
  padding-left: ${({ paddingLeft }) => paddingLeft || 'auto'};
  padding-right: ${({ paddingRight }) => paddingRight || 'auto'};
`;

export default Col;
