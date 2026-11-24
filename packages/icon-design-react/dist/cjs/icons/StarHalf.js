'use strict';

const { createElement, forwardRef } = require('react');

const StarHalf = forwardRef(function StarHalf(
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
    createElement('path', {"d":"M13 17.93L8.32 21.328C7.348 22.039 6.035 21.082 6.406 19.938L8.195 14.438L3.516 11.039C2.539 10.332 3.043 8.789 4.246 8.789L10.031 8.789L11.816 3.289","key":"0"})
  );
});

StarHalf.displayName = 'StarHalf';

module.exports = StarHalf;
module.exports.StarHalf = StarHalf;
module.exports.default = StarHalf;
