import styled from 'styled-components';

const Divider = styled.View`
  height: 1px;
  margin: ${({ margin }) => margin || '0px'};
  margin-top: ${({ marginTop }) => marginTop || 'auto'};
  margin-bottom: ${({ marginBottom }) => marginBottom || 'auto'};
  margin-right: ${({ marginRight }) => marginRight || 'auto'};
  margin-left: ${({ marginLeft }) => marginLeft || 'auto'};
  margin-horizontal: ${({ marginHorizontal }) => marginHorizontal || 'auto'};
`;
export default Divider;
