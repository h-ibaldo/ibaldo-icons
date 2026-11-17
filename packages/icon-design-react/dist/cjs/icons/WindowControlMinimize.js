'use strict';

const { createElement, forwardRef } = require('react');

const WindowControlMinimize = forwardRef(function WindowControlMinimize(
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
    createElement('line', {"x1":"18.94946288328174","y1":"18.998779303956326","x2":"4.94946288328174","y2":"18.998779303956326","key":"0"})
  );
});

WindowControlMinimize.displayName = 'WindowControlMinimize';

module.exports = WindowControlMinimize;
module.exports.WindowControlMinimize = WindowControlMinimize;
module.exports.default = WindowControlMinimize;
