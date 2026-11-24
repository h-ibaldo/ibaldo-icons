'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRepeatOneCurved = forwardRef(function ArrowRepeatOneCurved(
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
    createElement('path', {"d":"M11 10L12 10L12 14","key":"0"}),
    createElement('path', {"d":"M5 21L3 19L5 17","key":"1"}),
    createElement('path', {"d":"M21 5L12 5C7.027 5 3 9.027 3 14","key":"2"}),
    createElement('path', {"d":"M19 3L21 5L19 7","key":"3"}),
    createElement('path', {"d":"M3 19L12 19C16.973 19 21 14.973 21 10","key":"4"})
  );
});

ArrowRepeatOneCurved.displayName = 'ArrowRepeatOneCurved';

module.exports = ArrowRepeatOneCurved;
module.exports.ArrowRepeatOneCurved = ArrowRepeatOneCurved;
module.exports.default = ArrowRepeatOneCurved;
