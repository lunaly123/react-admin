import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

export default {
  formateDate(nowDate) {
    if (!nowDate) return '';
    let date = new Date(nowDate);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  },
  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total_count,
      showTotal: () => {
        return `共${data.result.total_count}条`
      },
      showQuickJumper: true
    }
  },
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = [];
    data.map((item) => {
      options.push(<Option key={item.id}>{item.name}</Option>)
    })
    return options;
  }
}