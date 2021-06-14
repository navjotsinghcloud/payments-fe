import axios from 'axios';
const {
  REACT_APP_BACKEND_URL = "http://localhost:8080/api"
} = process.env;

export default axios.create({
  baseURL: REACT_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json"
  }
});