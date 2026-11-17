'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineSquare = forwardRef(function ChartLineSquare(
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
    createElement('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('polyline', {"points":"6 15 9 11 13 15 18 9","key":"1"})
  );
});

ChartLineSquare.displayName = 'ChartLineSquare';

module.exports = ChartLineSquare;
module.exports.ChartLineSquare = ChartLineSquare;
module.exports.default = ChartLineSquare;
