'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarAxisThin = forwardRef(function ChartBarAxisThin(
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
    createElement('line', {"x1":"7","y1":"22","x2":"7","y2":"16","key":"1"}),
    createElement('line', {"x1":"11","y1":"22","x2":"11","y2":"12","key":"2"}),
    createElement('line', {"x1":"15","y1":"22","x2":"15","y2":"8","key":"3"}),
    createElement('line', {"x1":"19","y1":"22","x2":"19","y2":"4","key":"4"})
  );
});

ChartBarAxisThin.displayName = 'ChartBarAxisThin';

module.exports = ChartBarAxisThin;
module.exports.ChartBarAxisThin = ChartBarAxisThin;
module.exports.default = ChartBarAxisThin;
