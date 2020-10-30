/* function called returnDay, takes in one parameter (# btwn 1-7)
& returns the day of the week (1-Monday, etc) if # is <1 0r >7 function
return null.
hint store days in an array or object w/numerical keys. when function
is called, plug the # into the array/object  to retrieve the 
corresponding day name and then return that value*/

function returnDay(num) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num > 0 && num < 8) {
    return daysOfTheWeek[num - 1];
  } else {
    return null;
  }
}
console.log(returnDay(7));
