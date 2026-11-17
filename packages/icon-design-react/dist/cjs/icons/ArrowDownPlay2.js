'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownPlay2 = forwardRef(function ArrowDownPlay2(
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
    createElement('polyline', {"points":"8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192","key":"0"}),
    createElement('line', {"x1":"12.00000000018008","y1":"3.000000000842192","x2":"12.00000000018008","y2":"15.000000000842192","key":"1"}),
    createElement('path', {"d":"M6.08984375018008,16.000000000842192c.47705078125,2.83660888671875,2.93798828125,5,5.91015625,5s5.43310546875-2.16339111328125,5.91015625-5","key":"2"})
  );
});

ArrowDownPlay2.displayName = 'ArrowDownPlay2';

module.exports = ArrowDownPlay2;
module.exports.ArrowDownPlay2 = ArrowDownPlay2;
module.exports.default = ArrowDownPlay2;
