'use strict';

const { createElement, forwardRef } = require('react');

const GaugeTicks = forwardRef(function GaugeTicks(
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
    createElement('path', {"d":"M17 7L12 12","key":"0"}),
    createElement('path', {"d":"M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z","key":"1"}),
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"}),
    createElement('path', {"d":"M12 4L12 2","key":"3"}),
    createElement('path', {"d":"M20 12L22 12","key":"4"}),
    createElement('path', {"d":"M2 12L4 12","key":"5"}),
    createElement('path', {"d":"M4.93 4.93L6.344 6.344","key":"6"})
  );
});

GaugeTicks.displayName = 'GaugeTicks';

module.exports = GaugeTicks;
module.exports.GaugeTicks = GaugeTicks;
module.exports.default = GaugeTicks;
