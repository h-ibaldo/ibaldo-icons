'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCounterclockwiseTenChevron = forwardRef(function ArrowCounterclockwiseTenChevron(
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
    createElement('path', {"d":"M6 2L4 4L6 6","key":"0"}),
    createElement('path', {"d":"M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13C3 11.945 3.191 10.938 3.523 10","key":"1"}),
    createElement('path', {"d":"M12 4L4 4","key":"2"}),
    createElement('path', {"d":"M14.5 17C13.395 17 12.5 16.105 12.5 15L12.5 11C12.5 9.895 13.395 9 14.5 9C15.605 9 16.5 9.895 16.5 11L16.5 15C16.5 16.105 15.605 17 14.5 17Z","key":"3"}),
    createElement('path', {"d":"M9 17L9 9L8 9","key":"4"})
  );
});

ArrowCounterclockwiseTenChevron.displayName = 'ArrowCounterclockwiseTenChevron';

module.exports = ArrowCounterclockwiseTenChevron;
module.exports.ArrowCounterclockwiseTenChevron = ArrowCounterclockwiseTenChevron;
module.exports.default = ArrowCounterclockwiseTenChevron;
