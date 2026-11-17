'use strict';

const { createElement, forwardRef } = require('react');

const ChartVerticalColumns7 = forwardRef(function ChartVerticalColumns7(
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
    createElement('polyline', {"points":"2 2 2 22 22 22","key":"0"}),
    createElement('polyline', {"points":"5 22 5 13 10 13 10 4 15 4 15 9 20 9 20 22","key":"1"}),
    createElement('line', {"x1":"10","y1":"13","x2":"10","y2":"22","key":"2"}),
    createElement('line', {"x1":"15","y1":"9","x2":"15","y2":"22","key":"3"})
  );
});

ChartVerticalColumns7.displayName = 'ChartVerticalColumns7';

module.exports = ChartVerticalColumns7;
module.exports.ChartVerticalColumns7 = ChartVerticalColumns7;
module.exports.default = ChartVerticalColumns7;
