'use strict';

const { createElement, forwardRef } = require('react');

const Shelf = forwardRef(function Shelf(
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
    createElement('path', {"d":"M4 2L4 22","key":"0"}),
    createElement('path', {"d":"M20 2L20 22","key":"1"}),
    createElement('path', {"d":"M4 4L20 4","key":"2"}),
    createElement('path', {"d":"M4 12L20 12","key":"3"}),
    createElement('path', {"d":"M4 20L20 20","key":"4"})
  );
});

Shelf.displayName = 'Shelf';

module.exports = Shelf;
module.exports.Shelf = Shelf;
module.exports.default = Shelf;
