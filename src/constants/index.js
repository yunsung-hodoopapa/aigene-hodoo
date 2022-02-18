export const TIMEUNIT = ['date', 'week', 'month'];
export const DEVICE = ['pc', '모바일'];
export const AGE = [
  '10∼19세',
  '20∼29세',
  '30∼39세',
  '40∼49세',
  '50∼59세',
  '60세 이상',
];
export const GENDER = ['남', '녀'];
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
export const headers = {
  'Content-Type': 'application/json',
  'X-Naver-Client-Id': `${CLIENT_ID}`,
  'X-Naver-Client-Secret': `${CLIENT_SECRET}`,
};
