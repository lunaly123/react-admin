export default {
  formateDate(date) {
    if (!date) return '';
    let date = new Date(date);
    return date.getFullYear() + '-' + (date.gteMonth + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }
}