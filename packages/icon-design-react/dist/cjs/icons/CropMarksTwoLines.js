'use strict';

const { createElement, forwardRef } = require('react');

const CropMarksTwoLines = forwardRef(function CropMarksTwoLines(
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
    createElement('path', {"d":"M15 18L9 18C7.895 18 7 17.105 7 16L7 8C7 6.895 7.895 6 9 6L15 6C16.105 6 17 6.895 17 8L17 16C17 17.105 16.105 18 15 18Z","key":"0"}),
    createElement('path', {"d":"M11 10L13 10","key":"1"}),
    createElement('path', {"d":"M11 14L13 14","key":"2"}),
    createElement('path', {"d":"M5 2L5 5L2 5","key":"3"}),
    createElement('path', {"d":"M22 5L19 5L19 2","key":"4"}),
    createElement('path', {"d":"M19 22L19 19L22 19","key":"5"}),
    createElement('path', {"d":"M2 19L5 19L5 22","key":"6"})
  );
});

CropMarksTwoLines.displayName = 'CropMarksTwoLines';

module.exports = CropMarksTwoLines;
module.exports.CropMarksTwoLines = CropMarksTwoLines;
module.exports.default = CropMarksTwoLines;
