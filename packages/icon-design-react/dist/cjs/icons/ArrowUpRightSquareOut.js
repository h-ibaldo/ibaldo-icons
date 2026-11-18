'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpRightSquareOut = forwardRef(function ArrowUpRightSquareOut(
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
    createElement('path', {"d":"M15 2.98L21 2.98L21 8.98","key":"0"}),
    createElement('path', {"d":"M13 10.98L21 2.98","key":"1"}),
    createElement('path', {"d":"M11.004 6L5.004 6C3.898 6 3.004 6.895 3.004 8L3.004 19C3.004 20.105 3.898 21 5.004 21L16.004 21C17.109 21 18.004 20.105 18.004 19L18.004 13","key":"2"})
  );
});

ArrowUpRightSquareOut.displayName = 'ArrowUpRightSquareOut';

module.exports = ArrowUpRightSquareOut;
module.exports.ArrowUpRightSquareOut = ArrowUpRightSquareOut;
module.exports.default = ArrowUpRightSquareOut;
