import request from 'umi-request';
import { TableListParams } from './data.d';
import { baseURL } from '@/utils/config';

export async function queryRule(params?: TableListParams) {
  return request('/api/rule', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}


export async function newBuild(params?: TableListParams) {
  return request('/api/app/building', {
    method: 'POST',
    data: {
      ...params
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params
    },
  });
}
