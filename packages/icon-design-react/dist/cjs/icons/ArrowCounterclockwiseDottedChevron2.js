'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseDottedChevron2 = forwardRef(function ArrowCounterclockwiseDottedChevron2(
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
    createElement('path', {"d":"M12 13L12 13","key":"3"}),
    createElement('path', {"d":"M12 10L12 10","key":"4"}),
    createElement('path', {"d":"M12 16L12 16","key":"5"}),
    createElement('path', {"d":"M9.402 11.5L9.402 11.5","key":"6"}),
    createElement('path', {"d":"M14.598 14.5L14.598 14.5","key":"7"}),
    createElement('path', {"d":"M9.402 14.5L9.402 14.5","key":"8"}),
    createElement('path', {"d":"M14.598 11.5L14.598 11.5","key":"9"})
  );
});

ArrowCounterclockwiseDottedChevron2.displayName = 'ArrowCounterclockwiseDottedChevron2';

module.exports = ArrowCounterclockwiseDottedChevron2;
module.exports.ArrowCounterclockwiseDottedChevron2 = ArrowCounterclockwiseDottedChevron2;
module.exports.default = ArrowCounterclockwiseDottedChevron2;
