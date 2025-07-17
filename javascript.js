function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  console.log(hours);

  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  console.log(hours);
  hours = hours ? hours : 12;
  console.log(hours);

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  //Add the day
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let cday = days[now.getDay()];
  console.log(cday);

  //Add the month
  let month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let cmonth = month[now.getMonth()];
  console.log(cmonth);

  //Add the year
  let Year = now.getFullYear();
  console.log(Year);

  // Set values to respective divs
  document.getElementById("DaysInfo").innerHTML = `${cday}-${cmonth}-${Year}`;
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
  document.getElementById("amorpm").innerHTML = ampm;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call
