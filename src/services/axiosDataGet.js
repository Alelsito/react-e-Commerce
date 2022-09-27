import axios from 'axios'

const axiosDataGet = async (url) => {
  const { data } = await axios.get(url)
  return data
}

export default axiosDataGet
