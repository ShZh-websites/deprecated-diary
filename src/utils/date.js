export function dateFormat(date) {
  let monthAbbr;
  switch (date.getMonth() + 1) {
    case 1: monthAbbr = 'Jan'; break;
    case 2: monthAbbr = 'Feb'; break;
    case 3: monthAbbr = 'Mar'; break;
    case 4: monthAbbr = 'Apr'; break;
    case 5: monthAbbr = 'May'; break;
    case 6: monthAbbr = 'Jun'; break;
    case 7: monthAbbr = 'Jul'; break;
    case 8: monthAbbr = 'Aug'; break;
    case 9: monthAbbr = 'Sept'; break;
    case 10: monthAbbr = 'Oct'; break;
    case 11: monthAbbr = 'Nov'; break;
    case 12: monthAbbr = 'Dec'; break;
  }

  return `${monthAbbr} ${date.getDay()}`;
}