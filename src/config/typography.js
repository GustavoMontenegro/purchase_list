import { Platform } from 'react-native';
import { css } from 'styled-components';

const isIos = () => {
  return Platform.OS === 'ios';
};
// Available font sizes
const FONT_SIZE = {
  huge: 28,
  large: 23,
  medium: 19,
  regularVLI: 18,
  regular: 15,
  small: 13
};

// Available font families
const FONT_FAMILY = {
  WorkSansRegular: css`
    font-family: ${isIos() ? 'WorkSansRegular' : 'WorkSans-Regular'};
  `,
  WorkSansBold: css`
    font-family: ${isIos() ? 'WorkSansBold' : 'WorkSans-Bold'};
  `,
  WorkSansMedium: css`
    font-family: ${isIos() ? 'WorkSansMedium' : 'WorkSans-Medium'};
  `,
  WorkSansRegular: css`
    font-family: WorkSans-Regular;
  `,
  WorkSansBold: css`
    font-family: WorkSans-Bold;
    font-weight: ${isIos() ? 700 : 'normal'};
  `,
  WorkSansMedium: css`
    font-family: WorkSans-Medium;
  `,
};

const TYPOGRAPHY = {
  hugeText: css`
    font-size: ${FONT_SIZE.huge};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  hugeTextBold: css`
    font-size: ${FONT_SIZE.huge};
    ${FONT_FAMILY.WorkSansBold};
  `,
  largeText: css`
    font-size: ${FONT_SIZE.large};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  largeTextBold: css`
    font-size: ${FONT_SIZE.large};
    ${FONT_FAMILY.WorkSansBold};
  `,
  regularText: css`
    font-size: ${FONT_SIZE.regular};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  regularTextBold: css`
    font-size: ${FONT_SIZE.regular};
    ${FONT_FAMILY.WorkSansBold};
  `,
  mediumText: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  mediumTextBold: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansBold};
  `,
  smallText: css`
    font-size: ${FONT_SIZE.small};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  smallTextBold: css`
    font-size: ${FONT_SIZE.small};
    ${FONT_FAMILY.WorkSansBold};
  `
};

export default TYPOGRAPHY;
