import axios from 'axios';

const baseURL = 'https://www.breakingbadapi.com/api/';
const breakinBadApi = axios.create({baseURL});

export default breakinBadApi;