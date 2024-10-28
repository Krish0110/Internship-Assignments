import * as apiCall from '../api/api.clients'

const url = process.env.REACT_APP_API_URL

const inputSyncApi = async (path, body) => {
  const response = await apiCall.post(url+path, body)
  return response.data
}

export default inputSyncApi