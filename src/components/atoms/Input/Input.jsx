import styled from 'styled-components';
import Flex from '../Flex/Flex';

const Input = styled(Flex)`
  line-height: 24px;
  font-size: 16px
`;

Input.defaultProps = {
  as: 'input'
};

export default Input;
