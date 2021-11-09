import React, { useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import {
  Box,
  Button,
  Flex,
  Item,
  List,
  Title,
} from '../../atoms';

import Task from './Task';

import useToDoList from './hooks';

function Callback() {
  const { tasks, addTask, removeTask, toggleTask } = useToDoList();

  useEffect(() => console.log('To Do list render...'), []);

  return (
    <Box textAlign="center">
      <Title>To Do List</Title>
      <Flex width="100%" paddingTop="16px">
        <List>
          {tasks.map((task) => (
            <Item key={task.id}>
              <Task
                content={task.value}
                id={task.id}
                onClick={toggleTask}
              />
            </Item>
          ))}
        </List>
      </Flex>
      <Flex
        paddingX="64px"
        paddingY="32px"
        position="fixed"
        bottom="0"
        flexDirection="row"
        width="100%"
      >
        <Button
          width="50%"
          marginRight="16px"
          onClick={() => addTask(makeTask())}
        >
          Add
        </Button>
        <Button width="50%" marginLeft="16px"onClick={removeTask}>Remove</Button>
      </Flex>
    </Box>
  );

}

function makeTask() {
  return loremIpsum({
    count: 1,
    format: 'plain',
  });
}

export default Callback;
