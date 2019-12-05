import styled from 'styled-components';

const Row = styled.View`
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
`;

export default Row;
