# Javascript isSeconds function
isSeconds attempts to determine if a supplied variable is a seconds value. Because seconds are not a valid measurement and also as ms are the preferred integer value, isSeconds looks for a string and ensures it conforms to the pattern - `/^([0-9]*.){0,1}[0-9]+s$/`;
## Usage
```
    var v = '1.9s';
    isSeconds(v) === true
    v = '0.9.9s'
    isSeconds(v) === false
```

## Methods

1. `typeof v === string`
2. `/^([0-9]*.){0,1}[0-9]+s$/.test(v)`

## Issues

* Does not recognise 'seconds', 'secs', 'sec'
* Does not return valid if space proceeds 's'
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
