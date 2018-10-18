import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd'

export default class Api {
  static jsonp(opt) {
    return new Promise((resolve, reject) => {
      JsonP(opt.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response);
        } else {
          reject(response.message);
        }
      })
    })
  }

  static ajax(opt) {
    let loading;
    if (opt.data && opt.data.isShowLoading) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    return new Promise((resolve, reject) => {
      axios({
        url: opt.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (opt.data && opt.data.params) || ''
      }).then((response) => {
        if (opt.data && opt.data.isShowLoading) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status == '200') {
          let res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          reject(response.data);
        }
      })
    });
  }
}