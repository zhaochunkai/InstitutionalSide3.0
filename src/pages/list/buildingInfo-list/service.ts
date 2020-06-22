import request from 'umi-request';
import { TableListParams, addBuildsParams } from './data.d';
import { baseURL } from '@/utils/config';

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



//--------------------楼栋信息------------------------------
export async function building(params?: TableListParams) {
  return request(`${baseURL}/api/app/building`, {
    method: 'GET',
    data: {
      ...params,
    },
  });
}
//-----------------------添加------------------------------
export async function addbuilds(params?: addBuildsParams) {
  return request(`${baseURL}/api/app/building`, {
    method: 'POST',
    data: {
      ...params,
    },

  });
}
//-----------------------编辑-----------------------------
export async function editBuilds(params: TableListParams) {
  return request(`${baseURL}/api/app/building?id=${params.id}`, {
    method: 'POST',
    data: {
      ...params
    },
  });
}
