"use strict";
describe("isSeconds Test Suite", function(){
    var __imns = function(){ return window; }
    var adr = __imns();
    var valid = [
        '0.9s',
        '1s',
        '.3s',
        '1.9s' ];
    var invalid = [
        '0.9.9s',
        '0.9s0.9ms',
        '',
        {},
        [],
        'seconds',
        1,
        0.1];
    var a = false, b = 0;
    it(valid[0] + ' = true', function(){ expect(adr.isSeconds(valid[0])).toBe(true); });
    it(valid[1] + ' = true', function(){ expect(adr.isSeconds(valid[1])).toBe(true); });
    it(valid[2] + ' = true', function(){ expect(adr.isSeconds(valid[2])).toBe(true); });
    it(valid[3] + ' = true', function(){ expect(adr.isSeconds(valid[3])).toBe(true); });
    it(invalid[0] + ' = false', function(){ expect(adr.isSeconds(invalid[0])).toBe(false); });
    it(invalid[1] + ' = false', function(){ expect(adr.isSeconds(invalid[1])).toBe(false); });
    it(invalid[2] + ' = false', function(){ expect(adr.isSeconds(invalid[2])).toBe(false); });
    it(invalid[3] + ' = false', function(){ expect(adr.isSeconds(invalid[3])).toBe(false); });
    it(invalid[4] + ' = false', function(){ expect(adr.isSeconds(invalid[4])).toBe(false); });
    it(invalid[5] + ' = false', function(){ expect(adr.isSeconds(invalid[5])).toBe(false); });
    it(invalid[6] + ' = false', function(){ expect(adr.isSeconds(invalid[6])).toBe(false); });
    it(invalid[7] + ' = false', function(){ expect(adr.isSeconds(invalid[7])).toBe(false); });
});
