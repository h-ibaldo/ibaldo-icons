'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpLeftSquareOut = forwardRef(function ArrowUpLeftSquareOut(
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
    createElement('path', {"d":"M9.004 2.98L3.004 2.98L3.004 8.98","key":"0"}),
    createElement('path', {"d":"M11.004 10.98L3.004 2.98","key":"1"}),
    createElement('path', {"d":"M13 6L19 6C20.105 6 21 6.895 21 8L21 19C21 20.105 20.105 21 19 21L8 21C6.895 21 6 20.105 6 19L6 13","key":"2"})
  );
});

ArrowUpLeftSquareOut.displayName = 'ArrowUpLeftSquareOut';

module.exports = ArrowUpLeftSquareOut;
module.exports.ArrowUpLeftSquareOut = ArrowUpLeftSquareOut;
module.exports.default = ArrowUpLeftSquareOut;
