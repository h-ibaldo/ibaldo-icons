'use strict';

const { createElement, forwardRef } = require('react');

const ClockTurnLeftSmall = forwardRef(function ClockTurnLeftSmall(
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
    createElement('path', {"d":"M6 2L3 5L6 8","key":"0"}),
    createElement('path', {"d":"M13 5C17.418 5 21 8.582 21 13C21 17.418 17.418 21 13 21C8.582 21 5 17.418 5 13","key":"1"}),
    createElement('path', {"d":"M13 9L13 13L17 13","key":"2"}),
    createElement('path', {"d":"M3 5L13 5","key":"3"})
  );
});

ClockTurnLeftSmall.displayName = 'ClockTurnLeftSmall';

module.exports = ClockTurnLeftSmall;
module.exports.ClockTurnLeftSmall = ClockTurnLeftSmall;
module.exports.default = ClockTurnLeftSmall;
