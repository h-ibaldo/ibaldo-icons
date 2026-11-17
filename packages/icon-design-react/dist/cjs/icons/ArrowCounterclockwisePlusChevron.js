'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwisePlusChevron = forwardRef(function ArrowCounterclockwisePlusChevron(
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
    createElement('path', {"d":"M7 2L4 5L7 8","key":"0"}),
    createElement('path', {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"1"}),
    createElement('path', {"d":"M4 5L12 5","key":"2"}),
    createElement('path', {"d":"M12 10L12 16","key":"3"}),
    createElement('path', {"d":"M15 13L9 13","key":"4"})
  );
});

ArrowCounterclockwisePlusChevron.displayName = 'ArrowCounterclockwisePlusChevron';

module.exports = ArrowCounterclockwisePlusChevron;
module.exports.ArrowCounterclockwisePlusChevron = ArrowCounterclockwisePlusChevron;
module.exports.default = ArrowCounterclockwisePlusChevron;
