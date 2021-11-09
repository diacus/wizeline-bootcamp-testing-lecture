import styled from 'styled-components';

import Flex from '../Flex/Flex';

const Body = styled(Flex)`
  flex-direction: column;
  margin: 0px;
  min-width: 320px;
  position: relative;
`;

Body.defaultProps = {
  as: 'body',
};

export default Body;
