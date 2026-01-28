
import dayjs from 'dayjs';

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getTimeSpent(start, end) {
  return dayjs(end).subtract(dayjs(start));
}

export { humanizeDate, getTimeSpent };
