const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getDateString = (date?: Date) => {
  if(!date) return null;
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return {
    date: `${day} ${monthNames[month]}`,
    time: `${hours}:${minutes}`,
  };
};

const datesAreEqual = (firstDate: Date, secondDate: Date) => {
  return firstDate.getTime() === secondDate.getTime()
}

export { datesAreEqual };
export default getDateString;
