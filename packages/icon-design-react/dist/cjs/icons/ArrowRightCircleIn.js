'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRightCircleIn = forwardRef(function ArrowRightCircleIn(
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
    createElement('path', {"d":"M12 9L15 12L12 15","key":"0"}),
    createElement('path', {"d":"M2 12L15 12","key":"1"}),
    createElement('path', {"d":"M3.352 17C5.082 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.301 2 5.082 4.016 3.352 7","key":"2"})
  );
});

ArrowRightCircleIn.displayName = 'ArrowRightCircleIn';

module.exports = ArrowRightCircleIn;
module.exports.ArrowRightCircleIn = ArrowRightCircleIn;
module.exports.default = ArrowRightCircleIn;
