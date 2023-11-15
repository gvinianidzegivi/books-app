import axiosInstance from '../helpers/axiosInstance';

export const apiGetBooks = async () => {
  const axiosOptions = {
    url: '/books',
    method: 'get',
  };

  try {
    const response = await axiosInstance(axiosOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetBook = async (req) => {
  const { id } = req.params;

  console.log(req.params);

  const axiosOptions = {
    url: '/books/' + id,
    method: 'get',
  };

  try {
    const response = await axiosInstance(axiosOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};
