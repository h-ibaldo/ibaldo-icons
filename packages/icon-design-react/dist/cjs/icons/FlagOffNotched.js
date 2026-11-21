'use strict';

const { createElement, forwardRef } = require('react');

const FlagOffNotched = forwardRef(function FlagOffNotched(
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
    createElement('path', {"d":"M19 22L6 2","key":"0"}),
    createElement('path', {"d":"M17 14L20 14L14.883 9.086L20 3.969L11 4","key":"1"}),
    createElement('path', {"d":"M13.797 14L4 14L4 4L7.301 4","key":"2"}),
    createElement('path', {"d":"M4 14L4 21.898","key":"3"})
  );
});

FlagOffNotched.displayName = 'FlagOffNotched';

module.exports = FlagOffNotched;
module.exports.FlagOffNotched = FlagOffNotched;
module.exports.default = FlagOffNotched;
