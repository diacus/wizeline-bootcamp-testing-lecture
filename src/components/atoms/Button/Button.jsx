import styled from 'styled-components';
import Box from '../Box/Box';

const Button = styled(Box)`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #6EAF50;
  }
`;

Button.defaultProps = {
  as: 'button',
};

export default Button;
