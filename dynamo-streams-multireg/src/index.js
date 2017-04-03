
import axios from 'axios'
import λ from 'apex.js'

export default λ(async e => {
  const url = 'https://google.com'
  return {
    status: (await axios.get(url)).status,
    url,
    env: JSON.stringify(e)
  }
})