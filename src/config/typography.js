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
  WorkSansLight: css`
    font-family: ${isIos() ? 'WorkSansLight' : 'WorkSans-Light'};
  `,
  WorkSansExtraLight: css`
    font-family: ${isIos() ? 'WorkSansExtraLight' : 'WorkSans-ExtraLight'};
  `,
  WorkSansRegular: css`
    font-family: ${isIos() ? 'WorkSansRegular' : 'WorkSans-Regular'};
  `,
  WorkSansBold: css`
    font-family: ${isIos() ? 'WorkSansBold' : 'WorkSans-Bold'};
  `,
  WorkSansSemiBold: css`
    font-family: ${isIos() ? 'WorkSansSemiBold' : 'WorkSans-SemiBold'};
  `,
  WorkSansExtraBold: css`
    font-family: ${isIos() ? 'WorkSansExtraBold' : 'WorkSans-ExtraBold'};
  `,
  WorkSansMedium: css`
    font-family: ${isIos() ? 'WorkSansMedium' : 'WorkSans-Medium'};
  `,
  WorkSansBlack: css`
    font-family: ${isIos() ? 'WorkSansBlack' : 'WorkSans-Black'};
  `,
  WorkSansThin: css`
    font-family: ${isIos() ? 'WorkSansThin' : 'WorkSans-Thin'};
  `,

  WorkSansLight: css`
    font-family: WorkSans-Light;
  `,
  WorkSansExtraLight: css`
    font-family: WorkSans-ExtraLight;
  `,
  WorkSansRegular: css`
    font-family: WorkSans-Regular;
  `,
  WorkSansBold: css`
    font-family: WorkSans-Bold;
    font-weight: ${isIos() ? 700 : 'normal'};
  `,
  WorkSansSemiBold: css`
    font-family: WorkSans-SemiBold;
  `,
  WorkSansExtraBold: css`
    font-family: WorkSans-ExtraBold;
  `,
  WorkSansMedium: css`
    font-family: WorkSans-Medium;
  `,
  WorkSansBlack: css`
    font-family: WorkSans-Black;
  `,
  WorkSansThin: css`
    font-family: WorkSans-Thin;
  `
};

const TYPOGRAPHY = {
  hugeText: css`
    font-size: ${FONT_SIZE.huge};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  hugeTextSemibold: css`
    font-size: ${FONT_SIZE.huge};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  hugeTextBold: css`
    font-size: ${FONT_SIZE.huge};
    ${FONT_FAMILY.WorkSansBold};
  `,
  largeText: css`
    font-size: ${FONT_SIZE.large};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  largeTextSemibold: css`
    font-size: ${FONT_SIZE.large};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  largeTextBold: css`
    font-size: ${FONT_SIZE.large};
    ${FONT_FAMILY.WorkSansBold};
  `,
  regularVLIText: css`
    font-size: ${FONT_SIZE.regularVLI};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  regularVLITextSemibold: css`
    font-size: ${FONT_SIZE.regularVLI};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  regularVLITextBold: css`
    font-size: ${FONT_SIZE.regularVLI};
    ${FONT_FAMILY.WorkSansBold};
  `,
  regularText: css`
    font-size: ${FONT_SIZE.regular};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  regularTextSemibold: css`
    font-size: ${FONT_SIZE.regular};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  regularTextBold: css`
    font-size: ${FONT_SIZE.regular};
    ${FONT_FAMILY.WorkSansBold};
  `,
  mediumText: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  mediumTextSemibold: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  mediumTextBold: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansBold};
  `,
  mediumTextExtraBold: css`
    font-size: ${FONT_SIZE.medium};
    ${FONT_FAMILY.WorkSansExtraBold};
  `,
  smallText: css`
    font-size: ${FONT_SIZE.small};
    ${FONT_FAMILY.WorkSansRegular};
  `,
  smallTextSemibold: css`
    font-size: ${FONT_SIZE.small};
    ${FONT_FAMILY.WorkSansSemiBold};
  `,
  smallTextBold: css`
    font-size: ${FONT_SIZE.small};
    ${FONT_FAMILY.WorkSansBold};
  `
};

export default TYPOGRAPHY;
