'use strict';

const { createElement, forwardRef } = require('react');

const SquareDashedX = forwardRef(function SquareDashedX(
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
    createElement('path', {"d":"M4 22C2.895 22 2 21.105 2 20","key":"0"}),
    createElement('path', {"d":"M20 2C21.105 2 22 2.895 22 4","key":"1"}),
    createElement('path', {"d":"M22 20C22 21.105 21.105 22 20 22","key":"2"}),
    createElement('path', {"d":"M2 4C2 2.895 2.895 2 4 2","key":"3"}),
    createElement('path', {"d":"M16 22L14 22","key":"4"}),
    createElement('path', {"d":"M8 2L10 2","key":"5"}),
    createElement('path', {"d":"M10 22L8 22","key":"6"}),
    createElement('path', {"d":"M14 2L16 2","key":"7"}),
    createElement('path', {"d":"M2 16L2 14","key":"8"}),
    createElement('path', {"d":"M2 10L2 8","key":"9"}),
    createElement('path', {"d":"M22 16L22 14","key":"10"}),
    createElement('path', {"d":"M22 10L22 8","key":"11"}),
    createElement('path', {"d":"M9 15L15.082 8.918","key":"12"}),
    createElement('path', {"d":"M9 8.918L15.082 15","key":"13"})
  );
});

SquareDashedX.displayName = 'SquareDashedX';

module.exports = SquareDashedX;
module.exports.SquareDashedX = SquareDashedX;
module.exports.default = SquareDashedX;
