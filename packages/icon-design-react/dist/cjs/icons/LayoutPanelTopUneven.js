'use strict';

const { createElement, forwardRef } = require('react');

const LayoutPanelTopUneven = forwardRef(function LayoutPanelTopUneven(
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
    createElement('path', {"d":"M2 9L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10L3 10C2.449 10 2 9.551 2 9Z","key":"0"}),
    createElement('path', {"d":"M2 21L2 15C2 14.449 2.449 14 3 14L11 14C11.551 14 12 14.449 12 15L12 21C12 21.551 11.551 22 11 22L3 22C2.449 22 2 21.551 2 21Z","key":"1"}),
    createElement('path', {"d":"M16 21L16 15C16 14.449 16.449 14 17 14L21 14C21.551 14 22 14.449 22 15L22 21C22 21.551 21.551 22 21 22L17 22C16.449 22 16 21.551 16 21Z","key":"2"})
  );
});

LayoutPanelTopUneven.displayName = 'LayoutPanelTopUneven';

module.exports = LayoutPanelTopUneven;
module.exports.LayoutPanelTopUneven = LayoutPanelTopUneven;
module.exports.default = LayoutPanelTopUneven;
