import styled from 'styled-components';
import { system } from 'styled-system';
import PropTypes from 'prop-types';

import Box from '../Box/Box';

const Text = styled(Box)`
  hyphens: ${(props) => props.hyphens};
  -ms-hyphens: ${(props) => props.hyphens};
  -webkit-hyphens: ${(props) => props.hyphens};
  overflow-wrap: break-word;
  word-break: ${(props) => ('none' === props.hyphens ? 'break-word' : 'normal')};
  ${system({
    textTransform: true,
  })}
`;

Text.propTypes = {
  hyphens: PropTypes.string,
};

Text.defaultProps = {
  color: 'black',
  hyphens: 'auto',
};

export default Text;
