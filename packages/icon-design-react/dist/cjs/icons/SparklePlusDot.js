'use strict';

const { createElement, forwardRef } = require('react');

const SparklePlusDot = forwardRef(function SparklePlusDot(
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
    createElement('path', {"d":"M6 11.5C9.59 11.5 12.5 14.41 12.5 18","key":"0"}),
    createElement('path', {"d":"M19 11.5C15.41 11.5 12.5 14.41 12.5 18","key":"1"}),
    createElement('path', {"d":"M19 11.5C15.41 11.5 12.5 8.59 12.5 5","key":"2"}),
    createElement('path', {"d":"M6 11.5C9.59 11.5 12.5 8.59 12.5 5","key":"3"}),
    createElement('path', {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z","key":"4"}),
    createElement('path', {"d":"M5.5 16L5.5 21","key":"5"}),
    createElement('path', {"d":"M8 18.5L3 18.5","key":"6"})
  );
});

SparklePlusDot.displayName = 'SparklePlusDot';

module.exports = SparklePlusDot;
module.exports.SparklePlusDot = SparklePlusDot;
module.exports.default = SparklePlusDot;
