'use strict';

const { createElement, forwardRef } = require('react');

const SplitLeftRight = forwardRef(function SplitLeftRight(
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
    createElement('path', {"d":"M2 2L6 2C7.105 2 8 2.895 8 4L8 20C8 21.105 7.105 22 6 22L2 22","key":"0"}),
    createElement('path', {"d":"M22 22L18 22C16.895 22 16 21.105 16 20L16 4C16 2.895 16.895 2 18 2L22 2","key":"1"}),
    createElement('path', {"d":"M12 2L12 4","key":"2"}),
    createElement('path', {"d":"M12 8L12 10","key":"3"}),
    createElement('path', {"d":"M12 14L12 16","key":"4"}),
    createElement('path', {"d":"M12 20L12 22","key":"5"})
  );
});

SplitLeftRight.displayName = 'SplitLeftRight';

module.exports = SplitLeftRight;
module.exports.SplitLeftRight = SplitLeftRight;
module.exports.default = SplitLeftRight;
