import axios from 'axios'

export const getTasks = async () => {
  const options = {
    method: 'get',
    url: 'localhost:8080/task-manager/tasks',
  }
  try {
    const response = await axios(options);
    const data = await response.data
    console.log('Get tasks', data );
  } catch (error) {
    throw new Error(error)
  }
}

export const getTask = async (id) => {
  const options = {
    method: 'get',
    url: `localhost:8080/task-manager/task/${id}` 
  }
  try {
    const response = await axios(options);
    const data = await response.data
    console.log(`Get task id - ${id}`, data );
  } catch (error) {
    throw new Error(error)
  }
}

export const postTask = async (task) => {
  const options = {
    method: 'post',
    url: 'localhost:8080/task-manager/task',
    data: task
  }
  try {
    const response = await axios(options);
    const data = await response.data
    console.log(`Post task `, data );
  } catch (error) {
    throw new Error(error)
  }
}

export const updateTask = async (task) => {
  const options = {
    method: 'put',
    url: `localhost:8080/task-manager/task`,
    data: task
  }
  try {
    const response = await axios(options);
    const data = await response.data
    console.log(`Update task `, data );
  } catch (error) {
    throw new Error(error)
  }
}

export const removeTask = async (id) => {
  const options = {
    method: 'delete',
    url: `localhost:8080/task-manager/task/${id}`
  }
  try {
    const response = await axios(options);
    const data = await response.data;
    console.log(`Delete task `, data );
  } catch (error) {
    throw new Error(error)
  }
}