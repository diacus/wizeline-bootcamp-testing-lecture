import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  gridGap,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${gridGap}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}
  box-sizing: border-box;
  scrollbar-width: none;
`;

Box.propTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.gridGap,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Box;
