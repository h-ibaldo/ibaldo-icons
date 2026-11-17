'use strict';

const { createElement, forwardRef } = require('react');

const TextASquareRound = forwardRef(function TextASquareRound(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M7 17L10.75 7.629C10.898 7.25 11.27 7 11.676 7L12.324 7C12.73 7 13.102 7.25 13.25 7.629L17 17","key":"1"}),
    createElement('path', {"d":"M9 14L15 14","key":"2"})
  );
});

TextASquareRound.displayName = 'TextASquareRound';

module.exports = TextASquareRound;
module.exports.TextASquareRound = TextASquareRound;
module.exports.default = TextASquareRound;
