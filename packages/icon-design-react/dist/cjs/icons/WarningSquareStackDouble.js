'use strict';

const { createElement, forwardRef } = require('react');

const WarningSquareStackDouble = forwardRef(function WarningSquareStackDouble(
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
    createElement('rect', {"x":"7.000000005000402","y":"3.000000003880814","width":"14","height":"18.000000000010914","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"3.000000005000402","y1":"4.000000003891728","x2":"3.000000005000402","y2":"20.000000003891728","key":"1"}),
    createElement('line', {"x1":"14.000000005000402","y1":"8.000000003891728","x2":"14.000000005000402","y2":"12.000000003891728","key":"2"}),
    createElement('line', {"x1":"14.000000005000402","y1":"16.010000003891946","x2":"14.000000005000402","y2":"16.000000003891728","key":"3"})
  );
});

WarningSquareStackDouble.displayName = 'WarningSquareStackDouble';

module.exports = WarningSquareStackDouble;
module.exports.WarningSquareStackDouble = WarningSquareStackDouble;
module.exports.default = WarningSquareStackDouble;
