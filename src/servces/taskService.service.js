import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const getTasks = async () => {
  const options = {
    method: 'get',
    url: url,
    params: {
      _limit: 5
    }
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
    url: `${url}/${id}` 
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
    url: url,
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
    method: 'patch',
    url: `${url}/${task.id}`,
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
    url: `${url}/${id}`
  }
  try {
    const response = await axios(options);
    const data = await response.data
    console.log(`Delete task `, data );
  } catch (error) {
    throw new Error(error)
  }
}