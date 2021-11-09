import styled from 'styled-components';
import Box from '../Box/Box';

const List = styled(Box)``;

List.defaultProps = {
  as: 'ul',
  flexDirection: 'column',
};

export default List;
