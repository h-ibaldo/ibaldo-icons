'use strict';

const { createElement, forwardRef } = require('react');

const GridNine = forwardRef(function GridNine(
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
    createElement('path', {"d":"M9 21L9 3","key":"0"}),
    createElement('path', {"d":"M15 21L15 3","key":"1"}),
    createElement('path', {"d":"M3 9L21 9","key":"2"}),
    createElement('path', {"d":"M3 15L21 15","key":"3"}),
    createElement('path', {"d":"M19.199 21L4.801 21C3.805 21 3 20.195 3 19.199L3 4.801C3 3.805 3.805 3 4.801 3L19.199 3C20.195 3 21 3.805 21 4.801L21 19.199C21 20.195 20.195 21 19.199 21Z","key":"4"})
  );
});

GridNine.displayName = 'GridNine';

module.exports = GridNine;
module.exports.GridNine = GridNine;
module.exports.default = GridNine;
