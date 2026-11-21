'use strict';

const { createElement, forwardRef } = require('react');

const PencilPlusThree = forwardRef(function PencilPlusThree(
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
    createElement('path', {"d":"M21.5 3.758L20.328 2.586C19.547 1.805 18.281 1.805 17.5 2.586L3 17.086L2 22.086L7 21.086L21.5 6.586C22.281 5.805 22.281 4.539 21.5 3.758Z","key":"0"}),
    createElement('path', {"d":"M15 5.086L19 9.086","key":"1"}),
    createElement('path', {"d":"M4 16.086L8 20.086","key":"2"}),
    createElement('path', {"d":"M5.5 3L5.5 8","key":"3"}),
    createElement('path', {"d":"M8 5.5L3 5.5","key":"4"}),
    createElement('path', {"d":"M20.5 13L20.5 16","key":"5"}),
    createElement('path', {"d":"M22 14.5L19 14.5","key":"6"}),
    createElement('path', {"d":"M16.5 19L16.5 22","key":"7"}),
    createElement('path', {"d":"M18 20.5L15 20.5","key":"8"})
  );
});

PencilPlusThree.displayName = 'PencilPlusThree';

module.exports = PencilPlusThree;
module.exports.PencilPlusThree = PencilPlusThree;
module.exports.default = PencilPlusThree;
