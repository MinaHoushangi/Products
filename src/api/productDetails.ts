import apiClient from './client';

const endpoint = 'posts/1';

const getProductDetails = () => apiClient.get(endpoint);

export default {getProductList: getProductDetails};
