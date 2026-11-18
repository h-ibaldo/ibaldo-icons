'use strict';

const { createElement, forwardRef } = require('react');

const ArrowOrbit = forwardRef(function ArrowOrbit(
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
    createElement('path', {"d":"M10 13L13 16L10 19","key":"0"}),
    createElement('path', {"d":"M12 16C6.477 16 2 13.762 2 11C2 8.238 6.477 6 12 6C17.523 6 22 8.238 22 11C22 12.859 19.973 14.48 16.961 15.344","key":"1"})
  );
});

ArrowOrbit.displayName = 'ArrowOrbit';

module.exports = ArrowOrbit;
module.exports.ArrowOrbit = ArrowOrbit;
module.exports.default = ArrowOrbit;
