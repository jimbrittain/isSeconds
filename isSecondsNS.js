"use strict";
/* global __imns */

var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isSeconds' in adr)){
    adr.isSeconds = function(n){
        return (typeof n === 'string' && (/^([0-9]*.){0,1}[0-9]+s$/).test(n));
    };
}
