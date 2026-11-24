'use strict';

const { createElement, forwardRef } = require('react');

const SidebarChevronLeft = forwardRef(function SidebarChevronLeft(
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
    createElement('path', {"d":"M9 22L9 2","key":"0"}),
    createElement('path', {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2Z","key":"1"}),
    createElement('path', {"d":"M18 8L14 12L18 16","key":"2"})
  );
});

SidebarChevronLeft.displayName = 'SidebarChevronLeft';

module.exports = SidebarChevronLeft;
module.exports.SidebarChevronLeft = SidebarChevronLeft;
module.exports.default = SidebarChevronLeft;
