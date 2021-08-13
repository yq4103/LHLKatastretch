const talkingCalendar = function(date) {
  let friendlyDate = '';

  for (let i = 0; i < date.length; i++) {
    
    let dateString = '';
    let monthString = '';
    let yearString = date[0] + date[1] + date[2] + date[3];
    
    if (date[8] === '0' && date[9] === '1') {
      dateString = date[9] + 'st ,';
    } else if (date[8] === '0' && date[9] === '2') {
      dateString = date[9] + 'nd ,';
    } else if (date[8] === '0' && date[9] === '3') {
      dateString = date[9] + 'rd ,';
    } else if (date[8] !== '0' && date[9] === '1') {
      dateString = date[8] + date[9] + 'st ,';
    } else if (date[8] !== '0' && date[9] === '2') {
      dateString = date[8] + date[9] + 'nd ,';
    } else if (date[8] !== '0' && date[9] === '2') {
      dateString = date[8] + date[9] + 'rd, ';
    } else {
      dateString = date[8] + date[9] + 'th, ';
    }
    
    if (date[5] === '0' && date[6] === '1') {
      monthString = 'January ';
    } else if (date[5] === '0' && date[6] === '2') {
      monthString = 'February ';
    } else if (date[5] === '0' && date[6] === '3') {
      monthString = 'March ';
    } else if (date[5]=== '0' && date[6] === '4') {
      monthString = 'April ';
    } else if (date[5] === '0' && date[6] === '5') {
      monthString = 'May ';
    } else if (date[5] === '0' && date[6] === '6') {
      monthString = 'June ';
    } else if (date[5] === '0' && date[6] === '7') {
      monthString = 'July ';
    } else if (date[5] === '0' && date[6] === '8') {
      monthString = 'August ';
    } else if (date[5] === '0' && date[6] === '9') {
      monthString = 'September ';
    } else if (date[5] === '1' && date[6] === '0') {
      monthString = 'October ';
    } else if (date[5] === '1' && date[6] === '1') {
      monthString = 'November ';
    } else if (date[5] === '1' && date[6] === '2') {
      monthString = 'December ';
    }
    
    friendlyDate = monthString + dateString + yearString;
  }   
      return friendlyDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));