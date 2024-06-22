import apiClient from './client';
import {NUMBER_OF_ITEMS_PER_API_CALL} from '@constants/config';

const endpoint = 'posts/1/photos';

const getProductList = (offset = 0, limit = NUMBER_OF_ITEMS_PER_API_CALL) =>
  apiClient.get(`${endpoint}?_limit=${limit}&_start=${offset * limit}`);

export default {getProductList};
