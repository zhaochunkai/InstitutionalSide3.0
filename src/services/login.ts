
import request from '@/utils/request';

import {baseURL} from '@/utils/config';

export interface LoginParamsType {
  TenancyName: string;
  password: string;
  userName: string;
  userInput: string;
  pictureId: string;
  mobile: string;
  captcha: string;
}
// 账户登录
export async function fakeAccountLogin(params: LoginParamsType){
  return request(`${baseURL}/Api/Account/AccountLogin`, {
    method: 'POST',
    data: params,
  })
}
// 获取验证码
export async function getVerificationPicture() {
  return request(`${baseURL}/Api/Account/VerificationPicture`);
}
export async function getFakeCaptcha(mobile: string) {
  return request(`${baseURL}/api/login/captcha?mobile=${mobile}`);
}
