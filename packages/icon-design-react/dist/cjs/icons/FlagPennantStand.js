'use strict';

const { createElement, forwardRef } = require('react');

const FlagPennantStand = forwardRef(function FlagPennantStand(
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
    createElement('path', {"d":"M6 22L6 1.969L19.949 7.066L6 13","key":"0"}),
    createElement('path', {"d":"M2 22L13 22","key":"1"})
  );
});

FlagPennantStand.displayName = 'FlagPennantStand';

module.exports = FlagPennantStand;
module.exports.FlagPennantStand = FlagPennantStand;
module.exports.default = FlagPennantStand;
