import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

// Methods
const getAllItems = async () => {
  const { data } = await axios.get(`${BASE_URL}/item`)
  return data
}

const postSignup = (data) => axios.post(`${BASE_URL}/signup`, data)
const postLogin = (data) => axios.post(`${BASE_URL}/login`, data)

const getSpecificUser = (id) => {
  const token = window.localStorage.getItem('token')
  const config = {
    headers: { Authorization: `JWT ${token}` }
  }
  const result = axios.get(`${BASE_URL}/user/${id}`, config)
  return result
}

export {
  getAllItems,
  postSignup,
  postLogin,
  getSpecificUser
}
