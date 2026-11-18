'use strict';

const { createElement, forwardRef } = require('react');

const CylinderClock = forwardRef(function CylinderClock(
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
    createElement('path', {"d":"M21 12C21 14.762 18.762 17 16 17C13.238 17 11 14.762 11 12C11 9.238 13.238 7 16 7C18.762 7 21 9.238 21 12Z","key":"0"}),
    createElement('path', {"d":"M16 10L16 12L18 12","key":"1"}),
    createElement('path', {"d":"M16 17C16 19.762 13.762 22 11 22C8.238 22 6 19.762 6 17L6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7","key":"2"}),
    createElement('path', {"d":"M4 7L16 7","key":"3"}),
    createElement('path', {"d":"M4 17L16 17","key":"4"})
  );
});

CylinderClock.displayName = 'CylinderClock';

module.exports = CylinderClock;
module.exports.CylinderClock = CylinderClock;
module.exports.default = CylinderClock;
