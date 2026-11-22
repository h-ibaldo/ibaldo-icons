'use strict';

const { createElement, forwardRef } = require('react');

const ListArrowBendDownLeft = forwardRef(function ListArrowBendDownLeft(
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
    createElement('path', {"d":"M16.918 2L2 2","key":"0"}),
    createElement('path', {"d":"M17 10L2 10","key":"1"}),
    createElement('path', {"d":"M22 2L22 15C22 16.656 20.656 18 19 18L13 18","key":"2"}),
    createElement('path', {"d":"M9 18L2 18","key":"3"}),
    createElement('path', {"d":"M17 14L13 18L17 22","key":"4"})
  );
});

ListArrowBendDownLeft.displayName = 'ListArrowBendDownLeft';

module.exports = ListArrowBendDownLeft;
module.exports.ListArrowBendDownLeft = ListArrowBendDownLeft;
module.exports.default = ListArrowBendDownLeft;
