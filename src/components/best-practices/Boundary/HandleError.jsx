import React from 'react';

import { Box, Button, Title } from '../../atoms';

class HandleError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return  { hasError: true };
  }

  componentDidCatch(error, errorDetails) {
    console.log('Oops, something went wrong!');
    console.log(error);
    console.log(errorDetails);
  }

  reset() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center">
          <Title>{this.props.message}</Title>
          <Box margin="64px auto">
            <Button onClick={this.reset}>Reset</Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default HandleError;

