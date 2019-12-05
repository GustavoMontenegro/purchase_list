import styled from 'styled-components/native';

const Content = styled.ScrollView.attrs({
  contentStyleContainer: {
    flexGrow: 1
  }
})`
  padding: ${({ padding }) => padding || '0px'};
  padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal || '0px'};
`;
export default Content;
