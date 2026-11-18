'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRightFromBar = forwardRef(function ArrowRightFromBar(
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
    createElement('path', {"d":"M17 8L21 12L17 16","key":"0"}),
    createElement('path', {"d":"M3 17L3 7","key":"1"}),
    createElement('path', {"d":"M21 12L3 12","key":"2"})
  );
});

ArrowRightFromBar.displayName = 'ArrowRightFromBar';

module.exports = ArrowRightFromBar;
module.exports.ArrowRightFromBar = ArrowRightFromBar;
module.exports.default = ArrowRightFromBar;
