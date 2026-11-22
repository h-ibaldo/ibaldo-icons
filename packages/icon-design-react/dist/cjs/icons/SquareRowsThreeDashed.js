'use strict';

const { createElement, forwardRef } = require('react');

const SquareRowsThreeDashed = forwardRef(function SquareRowsThreeDashed(
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
    createElement('path', {"d":"M2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20Z","key":"0"}),
    createElement('path', {"d":"M2 15L4 15","key":"1"}),
    createElement('path', {"d":"M8 15L10 15","key":"2"}),
    createElement('path', {"d":"M14 15L16 15","key":"3"}),
    createElement('path', {"d":"M20 15L22 15","key":"4"}),
    createElement('path', {"d":"M2 9L4 9","key":"5"}),
    createElement('path', {"d":"M8 9L10 9","key":"6"}),
    createElement('path', {"d":"M14 9L16 9","key":"7"}),
    createElement('path', {"d":"M20 9L22 9","key":"8"})
  );
});

SquareRowsThreeDashed.displayName = 'SquareRowsThreeDashed';

module.exports = SquareRowsThreeDashed;
module.exports.SquareRowsThreeDashed = SquareRowsThreeDashed;
module.exports.default = SquareRowsThreeDashed;
