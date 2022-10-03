import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const getAllItems = async () => {
  const { data } = await axios.get(`${BASE_URL}/item`)
  return data
}

const postSignup = (data) => axios.post(`${BASE_URL}/signup`, data)

export { getAllItems, postSignup }
