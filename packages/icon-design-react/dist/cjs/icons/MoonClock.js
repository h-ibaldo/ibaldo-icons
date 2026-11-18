'use strict';

const { createElement, forwardRef } = require('react');

const MoonClock = forwardRef(function MoonClock(
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
    createElement('path', {"d":"M19.88 14.464A9 9 0 1 1 9.536 4.12","key":"0"}),
    createElement('path', {"d":"M19.88 14.464A8 8 0 0 1 9.536 4.12","key":"1"}),
    createElement('path', {"d":"M22 6.5A4.5 4.5 0 1 1 13 6.5A4.5 4.5 0 1 1 22 6.5Z","key":"2"}),
    createElement('path', {"d":"M17.5 4.5L17.5 6.5L19 7.5","key":"3"})
  );
});

MoonClock.displayName = 'MoonClock';

module.exports = MoonClock;
module.exports.MoonClock = MoonClock;
module.exports.default = MoonClock;
