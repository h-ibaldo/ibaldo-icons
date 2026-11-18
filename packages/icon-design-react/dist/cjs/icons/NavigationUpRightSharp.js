'use strict';

const { createElement, forwardRef } = require('react');

const NavigationUpRightSharp = forwardRef(function NavigationUpRightSharp(
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
    createElement('path', {"d":"M20 4L3 11L11 13L13 21Z","key":"0"})
  );
});

NavigationUpRightSharp.displayName = 'NavigationUpRightSharp';

module.exports = NavigationUpRightSharp;
module.exports.NavigationUpRightSharp = NavigationUpRightSharp;
module.exports.default = NavigationUpRightSharp;
