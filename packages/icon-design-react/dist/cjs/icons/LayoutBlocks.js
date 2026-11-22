'use strict';

const { createElement, forwardRef } = require('react');

const LayoutBlocks = forwardRef(function LayoutBlocks(
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
    createElement('path', {"d":"M2 14L18 14","key":"0"}),
    createElement('path', {"d":"M10 6L10 22","key":"1"}),
    createElement('path', {"d":"M15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2Z","key":"2"}),
    createElement('path', {"d":"M18 14L18 21C18 21.551 17.551 22 17 22L3 22C2.449 22 2 21.551 2 21L2 7C2 6.449 2.449 6 3 6L10 6","key":"3"})
  );
});

LayoutBlocks.displayName = 'LayoutBlocks';

module.exports = LayoutBlocks;
module.exports.LayoutBlocks = LayoutBlocks;
module.exports.default = LayoutBlocks;
