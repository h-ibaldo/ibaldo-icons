'use strict';

const { createElement, forwardRef } = require('react');

const BoxPlus = forwardRef(function BoxPlus(
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
    createElement('path', {"d":"M7 4.5L17 9.5","key":"0"}),
    createElement('path', {"d":"M2 7L12 12L22 7","key":"1"}),
    createElement('path', {"d":"M12 22L12 12","key":"2"}),
    createElement('path', {"d":"M15 20.5L12 22L2 17L2 7L12 2L22 7L22 12","key":"3"}),
    createElement('path', {"d":"M16 17L22 17","key":"4"}),
    createElement('path', {"d":"M19 14L19 20","key":"5"})
  );
});

BoxPlus.displayName = 'BoxPlus';

module.exports = BoxPlus;
module.exports.BoxPlus = BoxPlus;
module.exports.default = BoxPlus;
