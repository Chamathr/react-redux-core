import moment from "moment";

export const eventNameGenerator = (domain) => (action) => `${domain}/${action}`;

export const cloneArray = (input = []) => {
  const out = [];
  input.forEach((element) => {
    out.push({ ...element });
  });
  return out;
};

export const concatNames = ({ firstName, lastName }) => `${firstName} ${lastName}`;

const formatMonth = (month) => (month < 9 ? `0${month + 1}` : `${month}`);
const formatDay = (day) => (day < 10 ? `0${day}` : `${day}`);
export const formatDate = (date = new Date()) => {
  if (date) {
    return `${date.getFullYear()}-${formatMonth(date.getMonth())}-${formatDay(date.getDate())}`;
  }
  return "";
};

export const isEmpty = (value) => value === undefined || value === null || value === "";

export const calculateAge = (dateOfBirth) => {
  const {
    _data: { years, months, days },
  } = moment.duration(moment().diff(dateOfBirth));
  return `${years} years, ${months} months, ${days} days`;
};

