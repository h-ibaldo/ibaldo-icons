'use strict';

const { createElement, forwardRef } = require('react');

const ListBulletsDotsRight = forwardRef(function ListBulletsDotsRight(
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
    createElement('path', {"d":"M7 4L14 4","key":"0"}),
    createElement('path', {"d":"M7 12L14 12","key":"1"}),
    createElement('path', {"d":"M7 20L14 20","key":"2"}),
    createElement('path', {"d":"M2 4L3 4","key":"3"}),
    createElement('path', {"d":"M2 12L3 12","key":"4"}),
    createElement('path', {"d":"M7 8L14 8","key":"5"}),
    createElement('path', {"d":"M2 8L3 8","key":"6"}),
    createElement('path', {"d":"M2 20L3 20","key":"7"}),
    createElement('path', {"d":"M7 16L14 16","key":"8"}),
    createElement('path', {"d":"M22 4L22 4","key":"9"}),
    createElement('path', {"d":"M22 12L22 12","key":"10"}),
    createElement('path', {"d":"M22 20L22 20","key":"11"}),
    createElement('path', {"d":"M22 8L22 8","key":"12"}),
    createElement('path', {"d":"M22 16L22 16","key":"13"}),
    createElement('path', {"d":"M19 4L19 4","key":"14"}),
    createElement('path', {"d":"M19 12L19 12","key":"15"}),
    createElement('path', {"d":"M19 16L19 16","key":"16"}),
    createElement('path', {"d":"M2 16L3 16","key":"17"})
  );
});

ListBulletsDotsRight.displayName = 'ListBulletsDotsRight';

module.exports = ListBulletsDotsRight;
module.exports.ListBulletsDotsRight = ListBulletsDotsRight;
module.exports.default = ListBulletsDotsRight;
