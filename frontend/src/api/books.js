import axiosInstance from '../helpers/axiosInstance';

export const apiGetBooks = async (req) => {
  const url = new URL(req.request.url);
  const query = url.searchParams.get('query');

  const axiosOptions = {
    url: '/books',
    method: 'get',
    params: { query },
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
