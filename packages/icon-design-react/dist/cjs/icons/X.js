'use strict';

const { createElement, forwardRef } = require('react');

const X = forwardRef(function X(
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
    createElement('line', {"x1":"3.999999991150617","y1":"20.000000000538421","x2":"19.999999990430297","y2":"4.000000001257831","key":"0"}),
    createElement('line', {"x1":"19.999999990070137","y1":"20.000000000894943","x2":"3.999999991510776","y2":"4.000000000897671","key":"1"})
  );
});

X.displayName = 'X';

module.exports = X;
module.exports.X = X;
module.exports.default = X;
