'use strict';

const { createElement, forwardRef } = require('react');

const NavigationUpLeftSharp = forwardRef(function NavigationUpLeftSharp(
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
    createElement('path', {"d":"M4 4L21 11L13 13L11 21Z","key":"0"})
  );
});

NavigationUpLeftSharp.displayName = 'NavigationUpLeftSharp';

module.exports = NavigationUpLeftSharp;
module.exports.NavigationUpLeftSharp = NavigationUpLeftSharp;
module.exports.default = NavigationUpLeftSharp;
