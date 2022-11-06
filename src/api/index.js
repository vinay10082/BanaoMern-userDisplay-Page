import axios from 'axios'

const baseURL = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'

const r = await axios.get(baseURL);

console.log(r.data[0].excuse);