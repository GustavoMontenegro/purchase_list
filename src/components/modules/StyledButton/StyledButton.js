import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from '../../core/Label';

import { COLORS, SPACING, TYPOGRAPHY } from '../../../config';

const StyledButton = ({ isLoading, onPress, color, children, borderColor, backgroundColor, borderWidth, disabled }) => {
  return (
    <StyledTouchableOpacity
      disabled={disabled}
      onPress={onPress}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
    >
      {isLoading ? (
        <ActivityIndicator size="small" /*color={COLORS.white}*/ />
      ) : (
        <Label disabled={disabled} typography={TYPOGRAPHY.mediumText} color={color}>
          {children}
        </Label>
      )}
    </StyledTouchableOpacity>
  );
};

StyledButton.propTypes = {
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

StyledButton.defaultProps = {
  isLoading: false,
  onPress: () => {},
  // backgroundColor: COLORS.grayBackground,
  borderWidth: 0,
  // borderColor: COLORS.defaultText,
  // color: COLORS.white
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 90%;
  height: 55;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  border-radius: 5;
  margin-top: ${SPACING.default};
  margin-bottom: ${SPACING.default};
  /* box-shadow: ${props => (props.noShadow ? '0px 0px 0px transparent' : `1px 1px 5px ${COLORS.primary}20`)}; */
  elevation: ${props => (props.noShadow ? 0 : 1)};
`;

export default StyledButton;
