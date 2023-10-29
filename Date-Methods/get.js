/*
 * constructor - returns a date's constructor function
 * prototype - it allows to add new method and property in Date object
 * getDate() - returns the day (1 --> 31) of the month
 * getDay() - returns the day (0 --> 6) of the week
 * getMonth() - returns the month according to local time (0 --> 11)
 * getFullYear() - returns the year (four digits for dates between year 1000 and 9999)
 * getHours() - returns the hour according to local time (0 --> 23)
 * getMinutes() - returns the minute according to local time (0 --> 59)
 * getSeconds() - returns the seconds according to local time (0 --> 59)
 * getMilliSeconds() - returns the milliseconds according to local time (0 --> 999)
 * getTime() - returns the number of milliseconds between midnight of January 1, 1970 to specified date
 * getTimezoneOffset() - returns the time difference between UTC and local time (in minutes)
 * getUTCDate() - returns the day of the month (1 --> 31) according to universal time
 * getUTCDay() - returns the day of the week (0 --> 6) according to universal time
 * getUTCMonth() - returns the month (0 --> 11) according to universal time
 * getUTCFullYear() - returns the year (four digits for dates between year 1000 and 9999) according to universal time
 * getUTCHours() - returns the hour (0 --> 23) according to universal time
 * getUTCMinutes() - returns the minute (0 --> 59) according to universal time
 * getUTCSeconds() - returns the seconds (0 --> 59) according to universal time
 * getUTCMilliSeconds() - returns the milliseconds (0 --> 999) according to universal time
 * now() - returns the number of milliseconds since January 1, 1970 00:00:00 UTC
 * parse(dateString) - returns the number of milliseconds between midnight of January 1, 1970 to passes dateString
 * toDateString() - convert today's date to readable string
 * toISOString() - convert a Date object into a standard ISO format
 * toJSON() - convert a Date object into a stirng, fomatted as a JSON date
 * toLocaleDateString() - convert the date (not the time) of a Date object into a readable string using local conventions
 * toLocaleTimeString() - convert the time portion of a Date object into a readable string using local conventions
 * toLocaleString() - convert a Date object to a string using local settings
 * toString() - convert a Date object to a string
 * toTimeString() - convert the time portion of a Date string in to string
 * toUTCString() - convert a Date object to a string according to universal time
 * UTC() - returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to universal time.
 * valueOf() - returns the primitive value of Date object
 */

const currentDate = new Date();
console.log(currentDate);

/* ***** constructor ***** */

console.log(currentDate.constructor.toString());

/* ***** prototype ***** */

/*
 * When constructing a property, ALL date objects will be given the property, and its value, as default.
 * When constructing a method, ALL date objects will have this method available.
 * Note: Date.prototype does not refer to a single date object, but to the Date() object itself.
 * Note: Prototype is a global object constructor which is available for all JavaScript objects
 */

Date.prototype.getMonthName = function () {
  const monthData = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthData[this.getMonth()];
};

console.log(currentDate.getMonthName());

Date.prototype.getDayName = function () {
  const dayData = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thrusday",
    5: "Friday",
    6: "Saturday",
  };
  return dayData[this.getDay()];
};

console.log(currentDate.getDayName());

/* ***** getDate() ***** */

console.log(currentDate.getDate());
console.log(new Date(2004, 02, 30).getDate());
console.log(new Date("2004, 03, 30").getDate());

/* ***** getDay() ***** */

/*
 * Sunday --> 0
 * Monday --> 1
 * Tuesday --> 2
 * Wednesday --> 3
 * Thrusday --> 4
 * Friday --> 5
 * Saturday --> 6
 */

console.log(currentDate.getDay());
console.log(new Date(2004, 02, 30).getDay());

/* ***** getMonth() ***** */

/*
 * January --> 0
 * February --> 1
 * March --> 2
 * April --> 3
 * May --> 4
 * June --> 5
 * July --> 6
 * August --> 7
 * September --> 8
 * October --> 9
 * November --> 10
 * December --> 11
 */

console.log(currentDate.getMonth());

/* ***** getFullYear() ***** */

console.log(currentDate.getFullYear());

/* ***** getHours() ***** */

console.log(currentDate.getHours());

/* ***** getMinutes() ***** */

console.log(currentDate.getMinutes());

/* ***** getSeconds() ***** */

console.log(currentDate.getSeconds());

/* ***** getMilliSeconds() ***** */

console.log(currentDate.getMilliseconds());

/* ***** getTime() ***** */

console.log(currentDate.getTime());

/* ***** getTimezoneOffset() ***** */

/*
 * For example, If your time zone is GMT+2, -120 will be returned.
 * Note: The returned value is not a constant, because of the practice of using Daylight Saving Time.
 * Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
 * Note: UTC time is the same as GMT time.
 */

console.log(currentDate.getTimezoneOffset());

/* ***** getUTCDate() ***** */

/*
 * The UTC methods calculate their date assuming that the date object is of local time and date.
 * Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
 * Note: UTC time is the same as GMT time.
 */

console.log(currentDate.getUTCDate());

/* ***** getUTCDay() ***** */

/*
 * Note: Sunday is 0, Monday is 1, and so on.
 * The UTC methods calculate their date assuming that the date object is of local time and date.
 * Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
 * Note: UTC time is the same as GMT time.
 */

console.log(currentDate.getUTCDay());

/* ***** getUTCDay() ***** */

console.log(currentDate.getUTCDay());

/* ***** getUTCMonth() ***** */

console.log(currentDate.getUTCMonth());

/* ***** getUTCFullYear() ***** */

console.log(currentDate.getUTCFullYear());

/* ***** getUTCHours() ***** */

console.log(currentDate.getUTCHours());

/* ***** getUTCMinutes() ***** */

console.log(currentDate.getUTCMinutes());

/* ***** getUTCSeconds() ***** */

console.log(currentDate.getUTCSeconds());

/* ***** getUTCMilliSeconds() ***** */

console.log(currentDate.getUTCMilliseconds());

/* ***** now() ***** */

/*
 * now() methode similiar to getTime() mehtod bu it is little faster
 */

console.log(Date.now());
console.log(currentDate.getTime());

/* ***** parse(dateString) ***** */

console.log(Date.parse(new Date("2004 03 30")));
console.log(Date.parse("2004 March 30"));

/* ***** toDateString() ***** */

console.log(currentDate);
console.log(currentDate.toDateString());

/* ***** toISOString() ***** */

/*
 * The ISO-8601 Standard format looks like 👇
 * --> YYYY-MM-DDTHH:mm:ss.sssZ
 */

console.log(currentDate.toISOString());

/* ***** toJSON() ***** */

/*
 * JSON Date format as the same as ISO-8601 format
 */

console.log(currentDate.toJSON());

/* ***** toLocaleDateString() ***** */

console.log(currentDate.toLocaleDateString());

/* ***** toLocaleTimeString() ***** */

console.log(currentDate.toLocaleTimeString());

/* ***** toLocaleString() ***** */

/*
 * only one parameter --> Locals
 * --> bn-BD, ar-SA, hi-IN, bn-IN, en-US
 */

console.log(currentDate.toLocaleString());

/* ***** toString() ***** */

console.log(currentDate.toString());

/* ***** toTimeString() ***** */

console.log(currentDate.toTimeString());

/* ***** toUTCString() ***** */

console.log(currentDate.toUTCString());

/* ***** UTC() ***** */

console.log(Date.UTC(2021, 06, 17, 12, 48));

/* ***** valueOf() ***** */

console.log(Date.valueOf());

/* *****  ***** */
