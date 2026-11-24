'use strict';

const { createElement, forwardRef } = require('react');

const Power = forwardRef(function Power(
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
    createElement('path', {"d":"M12 3L12 12","key":"0"}),
    createElement('path', {"d":"M18 7.707C19.246 9.117 20 10.973 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 10.973 4.754 9.117 6 7.707","key":"1"})
  );
});

Power.displayName = 'Power';

module.exports = Power;
module.exports.Power = Power;
module.exports.default = Power;
