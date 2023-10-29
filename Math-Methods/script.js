/*
 * E - returns the Euler's number
 * LN2 - returns the natural logarithm of 2
 * LN10 - returns the natural logarithm of 10
 * LOG2E - returns the base-2 logarithm of E
 * LOG10E - returns the base-10 logarithm of E
 * PI - returns PI value
 * SQRT1_2 - returns the square root of 1/2
 * SQRT_2 - returns the square root of 2
 * abs(x) - returns the absolute value of x
 * acos(x) - returns the arccosine of x, in radians
 * acosh(x) - returns the hyperbolic arccosine of x
 * asin(x) - returns the arcsine of x, in radians
 * asinh(x) - returns the hyperbolic arcsine of x
 * atan(x) - returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
 * atan2(y, x) - returns the arctangent of the quotient of its arguments
 * atanh(x) - returns the hyperbolic arctangent of x
 * cbrt(x) - returns the cubicroot of x
 * ceil(x) - returns x, rounded upwards to the nearest integer
 * clz32(x) - returns the number of leading zeros in a 32-bit binary representation of x
 * cos(x) - returns the cosine of x (x is in radians)
 * cosh(x) - returns the hyperbolic cosine of x
 * exp(x) - returns the value of E^x (Exponential number)
 * expm1(x) - returns the value of E^x minas 1 (E^-x)
 * floor(x) - returns x rounded downwards to the nearest integer
 * fround(x) - returns nearest 32-bit single precision float representation of a number
 * log(x) - returns the natural logarithm (base E) of x
 * log10(x) - returns the base-10 logarithm of x
 * log1p(x) - returns the logarithm of 1 + x
 * log2(x) - returns the base-2 logarithm of x
 * max(x, y, z, ..., n) - returns the number with the highest value
 * min(x, y, z, ..., n) - returns the number with the lowest value
 * pow(x, y) - returns the value of x to the power of y
 * random() - returns a random number between 0 & 1
 * round(x) - rounds x to the nearest integer
 * sign(x) - returns if x is negative, null of positive (-1, 0, 1)
 * sin(x) - returns the sine of x (x is in radians)
 * sinh(x) - returns the hyperbolic sine of x
 * sqrt(x) - returns the square root of x
 * tan(x) - returns the tangent of an angel
 * tanh(x) - returns the hyperbolic tangent of a number
 * trunc(x) - returns the integer part of a number (x)
 */

/* ***** abs(x) *****
 * return the positive number of it's arguments
 */

console.log(Math.abs(3.456));
console.log(Math.abs(-3.456));
console.log(Math.abs(1.5 + 2.327));
console.log(Math.abs(NaN));
console.log(Math.abs(null));
console.log(Math.abs(undefined));
console.log(Math.abs("Hello"));

/* ***** acos(x) ***** */

/*
 * The acos() method returns the arccosine of a number as a value value between 0 and PI radians.
 * Note: If the parameter x is outside the range -1 to 1, the method will return NaN.
 * Tip: -1 will return the value of PI
 */

console.log(Math.acos(0.5));

/* ***** acosh(x) ***** */

/*
 * If the parameter x is less than 1, the method will return NaN.
 */

console.log(Math.acosh(2));
console.log(Math.acosh(0.5));

/* ***** asin(x) ***** */

/*
 * The asin() method returns the arcsine of a number as a value between -PI/2 and PI/2 radians.
 * Note: If the parameter x is outside the range -1 to 1, the browser will return NaN.
 * Tip: 1 will return the value of PI/2. -1 will return the value of -PI/2.
 */

console.log(Math.asin(0.5));
console.log(Math.asin(1));

/* ***** asinh(x) ***** */

console.log(Math.asinh(1));

/* ***** atan() ***** */

/*
 * The atan() method returns the arctangent of a number as a value between -PI/2 and PI/2 radians.
 */

console.log(Math.atan(2));

/* ***** atan2(y,x) ***** */

/*
 * The atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.
 * The number returned represents the counterclockwise angle in radians (not degrees) between the positive X axis and the point (x, y).
 * Note: With atan2(), the y coordinate is passed as the first argument and the x coordinate is passed as the second argument.
 * Paramter --> (y, x)
 *  -> y, represents the coordinate of y
 *  -> x, represents the coordinate of x
 */

console.log(Math.atan2(4, 8));

/* ***** atanh(x) ***** */

/*
 * The atanh() method returns the hyperbolic arctangent of a number.
 * Note: If the parameter x is greater than 1, or less than -1, the method will return NaN.
 * Note: If the parameter x is 1, the method will return Infinity.
 * Note: If the parameter x is -1, the method will return -Infinity.
 */

console.log(Math.atanh(0.5));
console.log(Math.atanh(1));

/* ***** cbrt(x) ***** */

console.log(Math.cbrt(8));
console.log(Math.cbrt(125));

/* ***** ceil(x) ***** */

/*
 * If the argument is already an integer then the value will not rounded
 */

console.log(Math.ceil(4.679));
console.log(Math.ceil(2));

/* ***** clz32(x) ***** */

/*
 * clz32() method is a short from of CountLeadingZeros32
 * it returns the number of leading zeros in a 32 bit binary representation of a number
 */

console.log(Math.clz32(0));
console.log(Math.clz32(1));
console.log(Math.clz32(2));
console.log(Math.clz32(3));
console.log(Math.clz32(4));

/* ***** cos(x) ***** */

/*
 * The cos() method returns a numeric value between -1 and 1, which represents the cosine of the angle.
 */

console.log(Math.cos(0.5));
console.log(Math.cos(1));
console.log(Math.cos(3));
console.log(Math.cos(4));

/* ***** cosh(x) ***** */

console.log(Math.cosh(2));
console.log(Math.cosh(0.5));

/* ***** E ***** */

/*
 * The E property returns the Euler's number and the base of natural logarithms, approximately 2.718.
 */

console.log(Math.E);

/* ***** exp() ***** */

/*
 * exp() - method use to find the exponential number of its argument
 */

console.log(Math.exp(2));

console.log(Math.exp(-2));

/* ***** expm1(x) ***** */

/*
 * expm1(x) - find the exponential value of a number -1
 */

console.log(Math.expm1(-1));
console.log(Math.expm1(2));

/* ***** floor(x) ***** */

/*
 * if the passes value is already an integer the it will not rounded it
 */

console.log(Math.floor(2.456));
console.log(Math.floor(3.1416));
console.log(Math.floor(5.678));

/* ***** fround(x) ***** */

console.log(Math.fround(3.5));
console.log(Math.fround(2.6));

/* ***** LN2 ***** */

console.log(Math.LN2);

/* ***** LN10 ***** */

console.log(Math.LN10);

/* ***** log(x) ***** */

console.log(Math.log(2));
console.log(Math.log(10));
console.log(Math.log(Math.E));

/* ***** log10(x) ***** */

console.log(Math.log10(2));
console.log(Math.log10(10));
console.log(Math.log10(Math.E));

/* ***** log1p(x) ***** */

/*
 * The log1p(x) method returns the natural logarithm (base E) of 1 + x.
 */

console.log(Math.log1p(3));

/* ***** log2(x) ***** */

console.log(Math.log2(4));
console.log(Math.log2(1));
console.log(Math.log2(2));
console.log(Math.log2(Math.E));

/* ***** LOG2E ***** */

console.log(Math.LOG2E);
console.log(Math.log2(Math.E));

/* ***** LOG10E ***** */

console.log(Math.LOG10E);
console.log(Math.log10(Math.E));

/* ***** max(x,y,...n) ***** */

const numsArr1 = [8, 11, 17, 18, 24, 5, 65, 33, 004];

console.log(Math.max(2, 3, 4, 5, 6, 1));
console.log(Math.max(...numsArr1));

/* ***** min(x,y,...n) ***** */

console.log(Math.min(2, 3, 4, 5, 1, 8, 3));
console.log(Math.min(...numsArr1));

/* ***** PI ***** */

/*
 * The PI property returns the ratio of a circle's area to the square of its radius, approximately 3.14
 */

console.log(Math.PI);

/* ***** pow(base, power) ***** */

/*
 * Parameter --> base, exponent(power)
 *   -> base
 *   -> exponent(power)
 */

console.log(Math.pow(2, 3));
console.log(Math.pow(8, 4));

/* ***** random() ***** */

/*
 * random() - method returns a random number between 0(inclusive) to 1(exclusive) but not including 1
 * it also returns a random number 0 < 1
 */

console.log(Math.random());
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * (5 - 1) + 1) + 1);

/* ***** round(x) ***** */

/*
 * 2.49 will be rounded down (2), and 2.5 will be rounded up (3)
 */

console.log(Math.round(3.45));
console.log(Math.round(3.56));

/* ***** sign(x) ***** */

/*
 * The sign() method checks whether a number is negative, positive or zero.
 * returns -->
 *  -> 1 for positive
 *  -> -1 for negative
 *  -> 0 for zero
 */

console.log(Math.sign(2));
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(null));

/* ***** sin(x) ***** */

console.log(Math.sin(3));
console.log(Math.sin(-1));

/* ***** sqrt(x) ***** */

console.log(Math.sqrt(4));
console.log(Math.sqrt(16));

/* ***** SQRT1_2 ***** */

console.log(Math.SQRT1_2);
console.log(Math.sqrt(0.5));

/* ***** SQRT2 ***** */

console.log(Math.SQRT2);
console.log(Math.sqrt(2));

/* ***** tan(x) ***** */

console.log(Math.tan(0));
console.log(Math.tan(90));
console.log(Math.tan(45));

/* ***** tanh(x) ***** */

console.log(Math.tanh(45));
console.log(Math.tanh(90));
console.log(Math.tanh(0));
console.log(Math.tanh(30));

/* ***** trunc(x) ***** */

/*
 * The trunc() method returns the integer part of a number.
 * Note: This method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
 */

console.log(Math.trunc(3.456));
console.log(Math.trunc(3.686));
console.log(Math.trunc(2.19));
console.log(Math.trunc(7.5));
