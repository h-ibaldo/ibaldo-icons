'use strict';

const { createElement, forwardRef } = require('react');

const NavigationUpSharp = forwardRef(function NavigationUpSharp(
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
    createElement('path', {"d":"M19 20L12.07 16L5 20L12 3Z","key":"0"})
  );
});

NavigationUpSharp.displayName = 'NavigationUpSharp';

module.exports = NavigationUpSharp;
module.exports.NavigationUpSharp = NavigationUpSharp;
module.exports.default = NavigationUpSharp;
