function clock() {
  var dates = new Date();
  var monthNames = [
    "Juanyary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "Jule",
    "August",
    "September",
    "October",
    "Novamber",
    "Decemper",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var h = dates.getHours();
  var m = dates.getMinutes();
  var s = dates.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var PA = h > 12 ? "pm"  :"am"
  document.getElementById("Days").innerHTML =
    dayNames[dates.getDay()] +
    " " +
    dates.getDate() +
    " " +
    monthNames[dates.getMonth()] +
    " " +
    dates.getFullYear();
  document.getElementById("hours").innerHTML = h +" " + PA;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
}
var inte = setInterval(clock, 1000);
