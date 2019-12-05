import styled from 'styled-components';

import COLORS from '../../config/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${({ color }) => color || COLORS.white};
`;

export default Container;
