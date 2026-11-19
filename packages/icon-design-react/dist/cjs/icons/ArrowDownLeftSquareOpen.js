'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownLeftSquareOpen = forwardRef(function ArrowDownLeftSquareOpen(
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
    createElement('path', {"d":"M3.004 9.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L19.004 2.98C20.109 2.98 21.004 3.875 21.004 4.98L21.004 18.98C21.004 20.082 20.109 20.98 19.004 20.98L14.004 20.98","key":"0"}),
    createElement('path', {"d":"M9.004 20.98L3.004 20.98L3.004 14.98","key":"1"}),
    createElement('path', {"d":"M11.004 12.98L3.004 20.98","key":"2"})
  );
});

ArrowDownLeftSquareOpen.displayName = 'ArrowDownLeftSquareOpen';

module.exports = ArrowDownLeftSquareOpen;
module.exports.ArrowDownLeftSquareOpen = ArrowDownLeftSquareOpen;
module.exports.default = ArrowDownLeftSquareOpen;
