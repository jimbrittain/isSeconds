"use strict";
/* global __imns */
/**
 * @function isSeconds
 * @param n {all}
 * @return {Boolean}
 * @description - as Seconds are not a valid measurement in Number, assumes string
 **/
var isSeconds = function(n){
    return (typeof n === 'string' && (/^([0-9]*.){0,1}[0-9]+s$/).test(n));
};
