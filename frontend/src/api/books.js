import axiosInstance from '../helpers/axiosInstance';

export const apiGetBooks = async () => {
  const axiosOptions = {
    url: '/books',
    method: 'get',
  };

  try {
    const response = await axiosInstance(axiosOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
