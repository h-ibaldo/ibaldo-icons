'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCheckUpgrade = forwardRef(function ArrowCheckUpgrade(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('polyline', {"points":"9.000000000029104 11.999999999979991 11.000000000029104 13.999999999979991 15.000000000029104 9.999999999979991","key":"0"}),
    createElement('polyline', {"points":"20.000000000029104 1.999999999979991 20.000000000029104 5.999999999979991 16.000000000029104 5.999999999979991","key":"1"}),
    createElement('path', {"d":"M19.986389160179897,5.999999999979991c-1.82470703125-2.42486572265625-4.717956542959655-4-7.986389160150793-4C6.477172851589785,1.999999999979991,2.000000000029104,6.477111816386241,2.000000000029104,11.999999999979991c0,5.5228271484375,4.477172851560681,10,10,10,4.837829589840112,0,8.872497558590112-3.43560791015625,9.79913330078125-8","key":"2"})
  );
});

ArrowCheckUpgrade.displayName = 'ArrowCheckUpgrade';

module.exports = ArrowCheckUpgrade;
module.exports.ArrowCheckUpgrade = ArrowCheckUpgrade;
module.exports.default = ArrowCheckUpgrade;
