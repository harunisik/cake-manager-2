import API from './ApiUtils';
import { handleResponse, handleError } from './ApiUtils';

export interface CakeData {
  _id: string;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
}

export interface CakeUpdateData {
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
}

export function getCakes() {
  return API.get('/books').then(handleResponse).catch(handleError);
}

export function getCake(id: string) {
  return API.get(`/books/${id}`).then(handleResponse).catch(handleError);
}

export function saveCake(data: CakeUpdateData) {
  return API.post('/books', data).then(handleResponse).catch(handleError);
}

export function updateCake(id: string, data: CakeUpdateData) {
  return API.put(`/books/${id}`, data).then(handleResponse).catch(handleError);
}

export function deleteCake(id: string, data: CakeUpdateData) {
  return API.delete(`/books/${id}`).then(handleResponse).catch(handleError);
}
