'use strict';

const { createElement, forwardRef } = require('react');

const WindowBare = forwardRef(function WindowBare(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977","key":"0"}),
    createElement('line', {"x1":"6.010000000180298","y1":"6.000000000448381","x2":"6.00000000018008","y2":"6.000000000448381","key":"1"}),
    createElement('line', {"x1":"9.010000000180298","y1":"6.000000000448381","x2":"9.00000000018008","y2":"6.000000000448381","key":"2"}),
    createElement('line', {"x1":"12.010000000180298","y1":"6.000000000448381","x2":"12.00000000018008","y2":"6.000000000448381","key":"3"})
  );
});

WindowBare.displayName = 'WindowBare';

module.exports = WindowBare;
module.exports.WindowBare = WindowBare;
module.exports.default = WindowBare;
