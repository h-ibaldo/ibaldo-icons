'use strict';

const { createElement, forwardRef } = require('react');

const PenToolVertical = forwardRef(function PenToolVertical(
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
    createElement('path', {"d":"M11 11C11 10.449 11.449 10 12 10C12.551 10 13 10.449 13 11C13 11.551 12.551 12 12 12C11.449 12 11 11.551 11 11Z","key":"0"}),
    createElement('path', {"d":"M7 18L7 16.605C7 14.254 6.305 11.957 5 10L11 2L13 2L19 10C17.695 11.957 17 14.254 17 16.605L17 18","key":"1"}),
    createElement('path', {"d":"M6 18L18 18L18 22L6 22Z","key":"2"}),
    createElement('path', {"d":"M12 2L12 11","key":"3"})
  );
});

PenToolVertical.displayName = 'PenToolVertical';

module.exports = PenToolVertical;
module.exports.PenToolVertical = PenToolVertical;
module.exports.default = PenToolVertical;
