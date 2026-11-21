'use strict';

const { createElement, forwardRef } = require('react');

const SlashCircle = forwardRef(function SlashCircle(
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
    createElement('path', {"d":"M9 15L15 9","key":"0"}),
    createElement('path', {"d":"M21 12C21 16.973 16.973 21 12 21C7.027 21 3 16.973 3 12C3 7.027 7.027 3 12 3C16.973 3 21 7.027 21 12Z","key":"1"})
  );
});

SlashCircle.displayName = 'SlashCircle';

module.exports = SlashCircle;
module.exports.SlashCircle = SlashCircle;
module.exports.default = SlashCircle;
