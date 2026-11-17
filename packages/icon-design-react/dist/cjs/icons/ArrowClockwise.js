'use strict';

const { createElement, forwardRef } = require('react');

const ArrowClockwise = forwardRef(function ArrowClockwise(
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
    createElement('polyline', {"points":"20.0000000004502 2.000000000040018 20.000000000130058 6.00000000036016 15.99999999981992 6.000000000040018","key":"0"}),
    createElement('path', {"d":"M21.949523925819449,11.000000000440195c.032653808581017.328979492190228.050476074190556.662414550788526.050476074180551,1-.000000000250111,5.522827148439319-4.477172852019976,9.999999999799911-10.0000000004502,9.999999999559805-5.522827148440228-.000000000251021-9.999999999799911-4.477172852009971-9.9999999995498-10.000000000451109.000000000240107-5.5228271484375,4.477172852009971-9.999999999799911,10.0000000004502-9.999999999548891,3.268432617179315.000000000138243,6.161621093669964,1.57519531276921,7.986389159969804,4.00000000036016","key":"1"})
  );
});

ArrowClockwise.displayName = 'ArrowClockwise';

module.exports = ArrowClockwise;
module.exports.ArrowClockwise = ArrowClockwise;
module.exports.default = ArrowClockwise;
