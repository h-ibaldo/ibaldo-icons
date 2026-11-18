'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseChevron = forwardRef(function ArrowCounterclockwiseChevron(
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
    createElement('path', {"d":"M9 2L6 5L9 8","key":"0"}),
    createElement('path', {"d":"M12.5 5C17.195 5 21 8.805 21 13.5C21 18.195 17.195 22 12.5 22C7.805 22 4 18.195 4 13.5C4 12.504 4.18 11.555 4.492 10.668","key":"1"}),
    createElement('path', {"d":"M12.5 5L6 5","key":"2"})
  );
});

ArrowCounterclockwiseChevron.displayName = 'ArrowCounterclockwiseChevron';

module.exports = ArrowCounterclockwiseChevron;
module.exports.ArrowCounterclockwiseChevron = ArrowCounterclockwiseChevron;
module.exports.default = ArrowCounterclockwiseChevron;
