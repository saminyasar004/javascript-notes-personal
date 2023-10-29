/*
 * setDate() - sets the day of the month in the Date object
 * setFullYear() - sets the year in the Date object
 * setHours() - sets the hours in the Date object
 * setMilliseconds() - sets the millisecond in the Date object
 * setMinutes() - sets the minute in the Date object
 * setMonth() - sests the month in the Date object
 * setSeconds() - sets the second in the Date object
 * setTime() - sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
 */

const currentDate = new Date();
console.log(currentDate);

/* ***** setDate() ***** */

/*
 * Expected values are 1-31, but other values are allowed:
 *    0 will result in the last day of the previous month
 *   -1 will result in the day before the last day of the previous month
 * If the month has 31 days:
 *    32 will result in the first day of the next month
 * If the month has 30 days:
 *    32 will result in the second day of the next month
 */

console.log(currentDate.setDate(33));

console.log(currentDate.getDate());

/* ***** setFullYear() ***** */

/*
 * setFullYear() method can set the year, month, day in the Date object
 * 1st parameter --> year
 * 2nd parameter --> month
 *  -> An integer representing the month
 *  ->  Expected values are 0-11, but other values are allowed:
 *  ->  -1 will result in the last month of the previous year
 *  ->  12 will result in the first month of the next year
 *  ->  13 will result in the second month of the next year
 * 3rd parameter --> date
 *  -> An integer representing the day of month
 *  -> Expected values are 1-31, but other values are allowed:
 *  -> 0 will result in the last day of the previous month
 *  -> -1 will result in the day before the last day of the previous month
 *  -> If the month has 31 days:
 *  -> 32 will result in the first day of the next month
 *  -> If the month has 30 days:
 *  -> 32 will result in the second day of the next month
 */

console.log(currentDate.setFullYear(1971, 02, 30));

console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());

/* ***** setHours() ***** */

/*
 * setHours() method can set the hours and many more in the Date object
 * 1st parameter --> hours
 *  -> Expected values are 0-23, but other values are allowed:
 *  -> -1 will result in the last hour of the previous day
 *  -> 24 will result in the first hour of the next day
 * 2nd parameter --> minute
 *  -> Expected values are 0-59, but other values are allowed:
 *  -> -1 will result in the last minute of the previous hour
 *  -> 60 will result in the first minute of the next hour
 * 3rd parameter --> second
 *  -> Expected values are 0-59, but other values are allowed:
 *  -> -1 will result in the last second of the previous minute
 *  -> 60 will result in the first second of the next minute
 * 4th parameter --> millisecod
 *  -> Expected values are 0-999, but other values are allowed:
 *  -> -1 will result in the last millisecond of the previous second
 *  -> 1000 will result in the first millisecond of the next second
 */

console.log(currentDate.setHours(8, 12, 4, 200));

console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

/* ***** setMillisecods() ***** */

console.log(currentDate.setMilliseconds(400));

console.log(currentDate.getMilliseconds());

/* ***** setMinutes() ***** */

/*
 * 1st parameter --> seconds
 * 2nd parameter --> milliseconds
 */

console.log(currentDate.setMinutes(24));

console.log(currentDate.getMinutes());

/* ***** setMonth() ***** */

/*
 * 1st paramter --> month
 * 2nd paramter --> date
 */

console.log(currentDate.setMonth(6, 20));

console.log(currentDate.getMonth());
console.log(currentDate.getDate());

/* ***** setSeconds() ***** */

/*
 * 1st paramter --> seconds
 * 2nd paramter --> milliseconds
 */

console.log(currentDate.setSeconds(49, 500));

console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());

/* ***** setTime() ***** */

/*
 * only one parameter --> milliseconds
 */

console.log(currentDate.setTime(1234567));

console.log(currentDate.getTime());

/* *****  ***** */
