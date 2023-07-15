import axios from 'axios'
import { useState } from 'react'

const URL_BASE = 'https://backend-thumbsrule-production.up.railway.app/'

const useAxios = (method, url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [onError, setOnError] = useState(null)

  async function execute (payload, config) {
    setLoading(true)
    setOnError(null)

    try {
      const { data } = await axios({
        method,
        url,
        data: payload,
        headers: {
          ...config?.headers
        },
        params: {
          ...config?.params
        },
        paramsSerializer: {
          ...config?.paramsSerializer
        }
      })
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setData([])
      setLoading(false)
      setOnError({
        hasError: true,
        status: error.response?.status || -1,
        data: error.response?.data || null
      })
    }
  }
  return {
    loading, data, onError, execute
  }
}

export function useAPI (method, url) {
  return useAxios(method, URL_BASE + url)
}
