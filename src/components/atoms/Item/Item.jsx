import styled from 'styled-components';
import Box from '../Box/Box';

const Item = styled(Box)`
  list-style-type: none;
`;

Item.defaultProps = {
  as: 'li',
};

export default Item;

