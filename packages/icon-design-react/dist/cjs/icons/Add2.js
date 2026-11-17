'use strict';

const { createElement, forwardRef } = require('react');

const Add2 = forwardRef(function Add2(
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
    createElement('line', {"x1":"11.97","y1":"7","x2":"11.97","y2":"17","key":"0"}),
    createElement('line', {"x1":"16.97","y1":"12","x2":"6.97","y2":"12","key":"1"})
  );
});

Add2.displayName = 'Add2';

module.exports = Add2;
module.exports.Add2 = Add2;
module.exports.default = Add2;
