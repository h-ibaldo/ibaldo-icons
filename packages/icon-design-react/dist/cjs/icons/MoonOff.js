'use strict';

const { createElement, forwardRef } = require('react');

const MoonOff = forwardRef(function MoonOff(
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
    createElement('path', {"d":"M21.5 13.492A9.564 9.564 0 0 1 7.304 20.231","key":"0"}),
    createElement('path', {"d":"M3.769 16.696A9.564 9.564 0 0 1 10.508 2.5","key":"1"}),
    createElement('path', {"d":"M21.5 13.492A8.501 8.501 0 0 1 14.462 13.074","key":"2"}),
    createElement('path', {"d":"M10.926 9.538A8.501 8.501 0 0 1 10.508 2.5","key":"3"}),
    createElement('path', {"d":"M21 3L3 21","key":"4"})
  );
});

MoonOff.displayName = 'MoonOff';

module.exports = MoonOff;
module.exports.MoonOff = MoonOff;
module.exports.default = MoonOff;
