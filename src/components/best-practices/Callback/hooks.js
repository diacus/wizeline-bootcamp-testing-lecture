import { useCallback, useState } from 'react'
import { v4 as uuid4 } from 'uuid';

function useToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    const task = { id: uuid4(), value, done: false };
    setTasks((tasksSoFar) => ([ ...tasksSoFar, task ]));
  };

  const toggleTask = useCallback((id) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id !== id) return t;
      const task = { ...t, done: !t.done };

      console.log(task);

      return task;
    });

    setTasks(updatedTasks);
  }, []);

  const removeTask = () => {
    if (tasks.length === 0) return;

    const [first, ...rest] = tasks;
    console.debug(`Deleting task ${first.value}`);
    setTasks(rest);
  };

  return { tasks, addTask, removeTask, toggleTask };
}

export default useToDoList;
