'use strict';

const { createElement, forwardRef } = require('react');

const LinkBrokenTicksSquare = forwardRef(function LinkBrokenTicksSquare(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M15 12L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L12 9","key":"1"}),
    createElement('path', {"d":"M9 12L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L12 15","key":"2"}),
    createElement('path', {"d":"M7 9L9 9","key":"3"}),
    createElement('path', {"d":"M9 7L9 9","key":"4"}),
    createElement('path', {"d":"M15 17L15 15","key":"5"}),
    createElement('path', {"d":"M17 15L15 15","key":"6"})
  );
});

LinkBrokenTicksSquare.displayName = 'LinkBrokenTicksSquare';

module.exports = LinkBrokenTicksSquare;
module.exports.LinkBrokenTicksSquare = LinkBrokenTicksSquare;
module.exports.default = LinkBrokenTicksSquare;
