'use strict';

const { createElement, forwardRef } = require('react');

const FlagNotched = forwardRef(function FlagNotched(
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
    createElement('path', {"d":"M4 22L4 1.969L20 1.969L14.883 7.086L19.898 12.102L3.977 12.102","key":"0"})
  );
});

FlagNotched.displayName = 'FlagNotched';

module.exports = FlagNotched;
module.exports.FlagNotched = FlagNotched;
module.exports.default = FlagNotched;
