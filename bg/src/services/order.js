import 'whatwg-fetch';
import BACKEND_URL from '../config';

export const getOrdersByCompany = company => fetch(`${BACKEND_URL}/ordersByCompany/${company}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

export const getOrdersByAddress = address => fetch(`${BACKEND_URL}/ordersByAddress/${address}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

export const removeOrdersByOrderId = orderId => fetch(`${BACKEND_URL}/orders/${orderId}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
  },
});

export const getOrdersCount = () => fetch(`${BACKEND_URL}/ordersCount`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});
