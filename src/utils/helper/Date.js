import moment from 'moment';

export const getDateName = (item) =>
  moment(item.createTime).format('YYYY-MM-DD');
