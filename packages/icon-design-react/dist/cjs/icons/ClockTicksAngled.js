'use strict';

const { createElement, forwardRef } = require('react');

const ClockTicksAngled = forwardRef(function ClockTicksAngled(
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
    createElement('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement('path', {"d":"M12 4L12 2","key":"1"}),
    createElement('path', {"d":"M12 22L12 20","key":"2"}),
    createElement('path', {"d":"M20 12L22 12","key":"3"}),
    createElement('path', {"d":"M2 12L4 12","key":"4"}),
    createElement('path', {"d":"M12 8L12 12L16 14","key":"5"})
  );
});

ClockTicksAngled.displayName = 'ClockTicksAngled';

module.exports = ClockTicksAngled;
module.exports.ClockTicksAngled = ClockTicksAngled;
module.exports.default = ClockTicksAngled;
