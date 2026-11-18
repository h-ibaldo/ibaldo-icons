'use strict';

const { createElement, forwardRef } = require('react');

const MoonFull = forwardRef(function MoonFull(
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
    createElement('path', {"d":"M21.5 12A9.5 9.5 0 1 1 2.5 12A9.5 9.5 0 1 1 21.5 12Z","key":"0"}),
    createElement('path', {"d":"M11 9A2 2 0 1 1 7 9A2 2 0 1 1 11 9Z","key":"1"}),
    createElement('path', {"d":"M16.5 14.5A1.5 1.5 0 1 1 13.5 14.5A1.5 1.5 0 1 1 16.5 14.5Z","key":"2"}),
    createElement('path', {"d":"M10.75 16A1.25 1.25 0 1 1 8.25 16A1.25 1.25 0 1 1 10.75 16Z","key":"3"})
  );
});

MoonFull.displayName = 'MoonFull';

module.exports = MoonFull;
module.exports.MoonFull = MoonFull;
module.exports.default = MoonFull;
