'use strict';

const { createElement, forwardRef } = require('react');

const MoonSnooze = forwardRef(function MoonSnooze(
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
    createElement('path', {"d":"M14.5 7L18.5 7L14.5 11.5L18.5 11.5","key":"2"}),
    createElement('path', {"d":"M19.5 2.5L22 2.5L19.5 5L22 5","key":"3"})
  );
});

MoonSnooze.displayName = 'MoonSnooze';

module.exports = MoonSnooze;
module.exports.MoonSnooze = MoonSnooze;
module.exports.default = MoonSnooze;
