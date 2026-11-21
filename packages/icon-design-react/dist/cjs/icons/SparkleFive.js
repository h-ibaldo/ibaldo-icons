'use strict';

const { createElement, forwardRef } = require('react');

const SparkleFive = forwardRef(function SparkleFive(
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
    createElement('path', {"d":"M3 6C4.656 6 6 7.344 6 9","key":"0"}),
    createElement('path', {"d":"M9 6C7.344 6 6 7.344 6 9","key":"1"}),
    createElement('path', {"d":"M9 6C7.344 6 6 4.656 6 3","key":"2"}),
    createElement('path', {"d":"M3 6C4.656 6 6 4.656 6 3","key":"3"}),
    createElement('path', {"d":"M15 6C16.656 6 18 7.344 18 9","key":"4"}),
    createElement('path', {"d":"M21 6C19.344 6 18 7.344 18 9","key":"5"}),
    createElement('path', {"d":"M21 6C19.344 6 18 4.656 18 3","key":"6"}),
    createElement('path', {"d":"M15 6C16.656 6 18 4.656 18 3","key":"7"}),
    createElement('path', {"d":"M8 13C9.656 13 11 14.344 11 16","key":"8"}),
    createElement('path', {"d":"M14 13C12.344 13 11 14.344 11 16","key":"9"}),
    createElement('path', {"d":"M14 13C12.344 13 11 11.656 11 10","key":"10"}),
    createElement('path', {"d":"M8 13C9.656 13 11 11.656 11 10","key":"11"}),
    createElement('path', {"d":"M15 18C16.656 18 18 19.344 18 21","key":"12"}),
    createElement('path', {"d":"M21 18C19.344 18 18 19.344 18 21","key":"13"}),
    createElement('path', {"d":"M21 18C19.344 18 18 16.656 18 15","key":"14"}),
    createElement('path', {"d":"M15 18C16.656 18 18 16.656 18 15","key":"15"}),
    createElement('path', {"d":"M2 19C3.656 19 5 20.344 5 22","key":"16"}),
    createElement('path', {"d":"M8 19C6.344 19 5 20.344 5 22","key":"17"}),
    createElement('path', {"d":"M8 19C6.344 19 5 17.656 5 16","key":"18"}),
    createElement('path', {"d":"M2 19C3.656 19 5 17.656 5 16","key":"19"})
  );
});

SparkleFive.displayName = 'SparkleFive';

module.exports = SparkleFive;
module.exports.SparkleFive = SparkleFive;
module.exports.default = SparkleFive;
