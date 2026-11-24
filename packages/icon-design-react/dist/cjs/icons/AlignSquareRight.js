'use strict';

const { createElement, forwardRef } = require('react');

const AlignSquareRight = forwardRef(function AlignSquareRight(
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
    createElement('path', {"d":"M14 16L10 16C8.895 16 8 15.105 8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16Z","key":"0"}),
    createElement('path', {"d":"M22 19L22 5","key":"1"})
  );
});

AlignSquareRight.displayName = 'AlignSquareRight';

module.exports = AlignSquareRight;
module.exports.AlignSquareRight = AlignSquareRight;
module.exports.default = AlignSquareRight;
