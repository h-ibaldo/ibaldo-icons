'use strict';

const { createElement, forwardRef } = require('react');

const FlagStand = forwardRef(function FlagStand(
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
    createElement('path', {"d":"M6 22L6 1.969L20 1.969L19.898 12.102L5.977 12.102","key":"0"}),
    createElement('path', {"d":"M2 22L13 22","key":"1"})
  );
});

FlagStand.displayName = 'FlagStand';

module.exports = FlagStand;
module.exports.FlagStand = FlagStand;
module.exports.default = FlagStand;
