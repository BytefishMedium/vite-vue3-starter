import Axios, { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(
  (config) => {
    /**
     * you can do something here
     */
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    /**
     * you can do something here
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      // eslint-disable-next-line no-console
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
