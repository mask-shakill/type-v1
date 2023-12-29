"use strict";
const Calculation = (n, n1, n2, n3) => {
    const year2012 = n;
    const year2013 = n1;
    const year2014 = n2;
    const year2015 = n3;
    const total = n + n1 + n2 + n3;
    const avg = total / 4;
    console.log(avg);
};
Calculation(12, 34, 12, 43);
