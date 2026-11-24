'use strict';

const { createElement, forwardRef } = require('react');

const Tv = forwardRef(function Tv(
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
    createElement('path', {"d":"M2 5L22 5L22 17L2 17Z","key":"0"}),
    createElement('path', {"d":"M17 19L19 17L21 20","key":"1"}),
    createElement('path', {"d":"M7 19L5 17L3 20","key":"2"})
  );
});

Tv.displayName = 'Tv';

module.exports = Tv;
module.exports.Tv = Tv;
module.exports.default = Tv;
