'use strict';

const { createElement, forwardRef } = require('react');

const ServerBars = forwardRef(function ServerBars(
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
    createElement('path', {"d":"M3 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z","key":"0"}),
    createElement('path', {"d":"M10 8L10 16","key":"1"}),
    createElement('path', {"d":"M14 8L14 16","key":"2"}),
    createElement('path', {"d":"M18 8L18 16","key":"3"}),
    createElement('path', {"d":"M6 16L6 16","key":"4"}),
    createElement('path', {"d":"M6 13L6 13","key":"5"})
  );
});

ServerBars.displayName = 'ServerBars';

module.exports = ServerBars;
module.exports.ServerBars = ServerBars;
module.exports.default = ServerBars;
