import axios from 'axios';
import queryString from 'query-string';
import { MatrimonyInterface, MatrimonyGetQueryInterface } from 'interfaces/matrimony';
import { GetQueryInterface } from '../../interfaces';

export const getMatrimonies = async (query?: MatrimonyGetQueryInterface) => {
  const response = await axios.get(`/api/matrimonies${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createMatrimony = async (matrimony: MatrimonyInterface) => {
  const response = await axios.post('/api/matrimonies', matrimony);
  return response.data;
};

export const updateMatrimonyById = async (id: string, matrimony: MatrimonyInterface) => {
  const response = await axios.put(`/api/matrimonies/${id}`, matrimony);
  return response.data;
};

export const getMatrimonyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/matrimonies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMatrimonyById = async (id: string) => {
  const response = await axios.delete(`/api/matrimonies/${id}`);
  return response.data;
};
