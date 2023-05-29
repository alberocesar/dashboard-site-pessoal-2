import axios from "axios"

const api = axios.create({
  baseURL: `https://json-server-ex-a9rd.onrender.com`,
})

// https://json-server-ex-a9rd.onrender.com // render
// http://localhost:5000 // local

export default api
