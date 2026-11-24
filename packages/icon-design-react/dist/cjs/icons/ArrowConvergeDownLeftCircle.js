'use strict';

const { createElement, forwardRef } = require('react');

const ArrowConvergeDownLeftCircle = forwardRef(function ArrowConvergeDownLeftCircle(
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
    createElement('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z","key":"0"}),
    createElement('path', {"d":"M9 6L9 9L12 9","key":"1"}),
    createElement('path', {"d":"M11 16L11 13L8 13","key":"2"}),
    createElement('path', {"d":"M15 12L15 15L18 15","key":"3"}),
    createElement('path', {"d":"M7 17L11 13","key":"4"}),
    createElement('path', {"d":"M9 9L13 5","key":"5"}),
    createElement('path', {"d":"M15 15L19 11","key":"6"})
  );
});

ArrowConvergeDownLeftCircle.displayName = 'ArrowConvergeDownLeftCircle';

module.exports = ArrowConvergeDownLeftCircle;
module.exports.ArrowConvergeDownLeftCircle = ArrowConvergeDownLeftCircle;
module.exports.default = ArrowConvergeDownLeftCircle;
