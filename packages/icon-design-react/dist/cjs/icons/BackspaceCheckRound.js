'use strict';

const { createElement, forwardRef } = require('react');

const BackspaceCheckRound = forwardRef(function BackspaceCheckRound(
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
    createElement('path', {"d":"M22 17L22 7C22 5.344 20.656 4 19 4L9 4C8.086 4 7.223 4.418 6.652 5.133L2.676 10.133C1.805 11.227 1.805 12.773 2.676 13.867L6.652 18.867C7.223 19.582 8.086 20 9 20L19 20C20.656 20 22 18.656 22 17Z","key":"0"}),
    createElement('path', {"d":"M10 12L12 14L16 10","key":"1"})
  );
});

BackspaceCheckRound.displayName = 'BackspaceCheckRound';

module.exports = BackspaceCheckRound;
module.exports.BackspaceCheckRound = BackspaceCheckRound;
module.exports.default = BackspaceCheckRound;
