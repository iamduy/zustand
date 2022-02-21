import axios from 'axios'
import { useCallback } from 'react'

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 2 * 60 * 1000
})

const useRequest = () => {

  const onGetExecute = useCallback(
    (url, entity = {}) => {
      const execute = async () => {
        try {
          const { data } = await instance.get(url, entity)
          return data
        } catch (error) {
          console.log('error', error);
        }
      }
      return execute()
    },
    []
  )

  const onPostExecute = useCallback(
    (url, entity = {}) => {
      const execute = async () => {
        try {
          const { data } = await instance.post(
            url,
            entity
          )
          return data
        } catch (error) {
          console.log('error', error);
        }
      }
      return execute()
    },
    []
  )

  const onPutExecute = useCallback(
    (url, entity = {}) => {
      const execute = async () => {
        try {
          const { data } = await instance.put(url, entity)
          return data
        } catch (error) {
          console.log('error', error);
        }
      }
      return execute()
    },
    []
  )

  const onDeleteExecute = useCallback(
    (url, entity = {}) => {
      const execute = async () => {
        try {
          const { data } = await instance.delete(url, entity)
          return data
        } catch (error) {
          console.log('error', error)
        }
      }
      return execute()
    },
    []
  )

  return {
    onGetExecute,
    onPostExecute,
    onPutExecute,
    onDeleteExecute
  }
}

export default useRequest
