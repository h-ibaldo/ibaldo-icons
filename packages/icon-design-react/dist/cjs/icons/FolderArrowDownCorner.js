'use strict';

const { createElement, forwardRef } = require('react');

const FolderArrowDownCorner = forwardRef(function FolderArrowDownCorner(
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
    createElement('path', {"d":"M13 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 14","key":"0"}),
    createElement('path', {"d":"M18 13L18 21","key":"1"}),
    createElement('path', {"d":"M15 18L18 21L21 18","key":"2"})
  );
});

FolderArrowDownCorner.displayName = 'FolderArrowDownCorner';

module.exports = FolderArrowDownCorner;
module.exports.FolderArrowDownCorner = FolderArrowDownCorner;
module.exports.default = FolderArrowDownCorner;
