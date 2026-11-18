'use strict';

const { createElement, forwardRef } = require('react');

const SquareStackLockDashed = forwardRef(function SquareStackLockDashed(
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
    createElement('path', {"d":"M8 18L20 18C21.105 18 22 17.105 22 16L22 4C22 2.895 21.105 2 20 2L8 2C6.895 2 6 2.895 6 4L6 16C6 17.105 6.895 18 8 18Z","key":"0"}),
    createElement('path', {"d":"M17 14L11 14L11 10L17 10Z","key":"1"}),
    createElement('path', {"d":"M12 10L12 8C12 6.895 12.895 6 14 6C15.105 6 16 6.895 16 8L16 10","key":"2"}),
    createElement('path', {"d":"M2 13L2 15","key":"3"}),
    createElement('path', {"d":"M9 22L11 22","key":"4"}),
    createElement('path', {"d":"M15 22L16 22C17.105 22 18 21.105 18 20L18 19","key":"5"}),
    createElement('path', {"d":"M2 19L2 20C2 21.105 2.895 22 4 22L5 22","key":"6"}),
    createElement('path', {"d":"M5 6L4 6C2.895 6 2 6.895 2 8L2 9","key":"7"})
  );
});

SquareStackLockDashed.displayName = 'SquareStackLockDashed';

module.exports = SquareStackLockDashed;
module.exports.SquareStackLockDashed = SquareStackLockDashed;
module.exports.default = SquareStackLockDashed;
