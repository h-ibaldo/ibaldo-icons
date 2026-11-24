'use strict';

const { createElement, forwardRef } = require('react');

const ClockCheckTop = forwardRef(function ClockCheckTop(
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
    createElement('path', {"d":"M12 7L12 12L17 14","key":"0"}),
    createElement('path', {"d":"M16 4L18 6L22 2","key":"1"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"2"})
  );
});

ClockCheckTop.displayName = 'ClockCheckTop';

module.exports = ClockCheckTop;
module.exports.ClockCheckTop = ClockCheckTop;
module.exports.default = ClockCheckTop;
