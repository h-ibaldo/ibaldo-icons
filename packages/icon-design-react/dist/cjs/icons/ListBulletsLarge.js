'use strict';

const { createElement, forwardRef } = require('react');

const ListBulletsLarge = forwardRef(function ListBulletsLarge(
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
    createElement('path', {"d":"M10 4L21 4","key":"0"}),
    createElement('path', {"d":"M10 12L21 12","key":"1"}),
    createElement('path', {"d":"M10 20L21 20","key":"2"}),
    createElement('path', {"d":"M5 4C5 4.551 4.551 5 4 5C3.449 5 3 4.551 3 4C3 3.449 3.449 3 4 3C4.551 3 5 3.449 5 4Z","key":"3"}),
    createElement('path', {"d":"M5 12C5 12.551 4.551 13 4 13C3.449 13 3 12.551 3 12C3 11.449 3.449 11 4 11C4.551 11 5 11.449 5 12Z","key":"4"}),
    createElement('path', {"d":"M5 20C5 20.551 4.551 21 4 21C3.449 21 3 20.551 3 20C3 19.449 3.449 19 4 19C4.551 19 5 19.449 5 20Z","key":"5"})
  );
});

ListBulletsLarge.displayName = 'ListBulletsLarge';

module.exports = ListBulletsLarge;
module.exports.ListBulletsLarge = ListBulletsLarge;
module.exports.default = ListBulletsLarge;
