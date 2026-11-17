'use strict';

const { createElement, forwardRef } = require('react');

const ChartVerticalLinesColumns1 = forwardRef(function ChartVerticalLinesColumns1(
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
    createElement('line', {"x1":"4","y1":"21","x2":"4","y2":"15","key":"0"}),
    createElement('line', {"x1":"8","y1":"21","x2":"8","y2":"12","key":"1"}),
    createElement('line', {"x1":"12","y1":"21","x2":"12","y2":"9","key":"2"}),
    createElement('line', {"x1":"16","y1":"21","x2":"16","y2":"6","key":"3"}),
    createElement('line', {"x1":"20","y1":"21","x2":"20","y2":"3","key":"4"})
  );
});

ChartVerticalLinesColumns1.displayName = 'ChartVerticalLinesColumns1';

module.exports = ChartVerticalLinesColumns1;
module.exports.ChartVerticalLinesColumns1 = ChartVerticalLinesColumns1;
module.exports.default = ChartVerticalLinesColumns1;
