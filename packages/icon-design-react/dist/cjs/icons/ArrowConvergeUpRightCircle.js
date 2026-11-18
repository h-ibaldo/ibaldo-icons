'use strict';

const { createElement, forwardRef } = require('react');

const ArrowConvergeUpRightCircle = forwardRef(function ArrowConvergeUpRightCircle(
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
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M15 18L15 15L12 15","key":"1"}),
    createElement('path', {"d":"M13 8L13 11L16 11","key":"2"}),
    createElement('path', {"d":"M9 12L9 9L6 9","key":"3"}),
    createElement('path', {"d":"M17 7L13 11","key":"4"}),
    createElement('path', {"d":"M15 15L11 19","key":"5"}),
    createElement('path', {"d":"M9 9L5 13","key":"6"})
  );
});

ArrowConvergeUpRightCircle.displayName = 'ArrowConvergeUpRightCircle';

module.exports = ArrowConvergeUpRightCircle;
module.exports.ArrowConvergeUpRightCircle = ArrowConvergeUpRightCircle;
module.exports.default = ArrowConvergeUpRightCircle;
