'use strict';

const { createElement, forwardRef } = require('react');

const Target = forwardRef(function Target(
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
    createElement('path', {"d":"M6 12C6 8.688 8.688 6 12 6C15.313 6 18 8.688 18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12Z","key":"0"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"}),
    createElement('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"2"})
  );
});

Target.displayName = 'Target';

module.exports = Target;
module.exports.Target = Target;
module.exports.default = Target;
