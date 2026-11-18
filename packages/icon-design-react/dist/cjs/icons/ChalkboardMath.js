'use strict';

const { createElement, forwardRef } = require('react');

const ChalkboardMath = forwardRef(function ChalkboardMath(
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
    createElement('path', {"d":"M3 19L3 5L21 5L21 19","key":"0"}),
    createElement('path', {"d":"M22 19L2 19","key":"1"}),
    createElement('path', {"d":"M10 12L14 12","key":"2"}),
    createElement('path', {"d":"M12 10L12 14","key":"3"}),
    createElement('path', {"d":"M17 14L17 10","key":"4"}),
    createElement('path', {"d":"M7 14L7 10","key":"5"})
  );
});

ChalkboardMath.displayName = 'ChalkboardMath';

module.exports = ChalkboardMath;
module.exports.ChalkboardMath = ChalkboardMath;
module.exports.default = ChalkboardMath;
