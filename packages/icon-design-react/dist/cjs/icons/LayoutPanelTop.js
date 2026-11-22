'use strict';

const { createElement, forwardRef } = require('react');

const LayoutPanelTop = forwardRef(function LayoutPanelTop(
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
    createElement('path', {"d":"M2 21L2 15C2 14.449 2.449 14 3 14L9 14C9.551 14 10 14.449 10 15L10 21C10 21.551 9.551 22 9 22L3 22C2.449 22 2 21.551 2 21Z","key":"1"}),
    createElement('path', {"d":"M14 21L14 15C14 14.449 14.449 14 15 14L21 14C21.551 14 22 14.449 22 15L22 21C22 21.551 21.551 22 21 22L15 22C14.449 22 14 21.551 14 21Z","key":"2"})
  );
});

LayoutPanelTop.displayName = 'LayoutPanelTop';

module.exports = LayoutPanelTop;
module.exports.LayoutPanelTop = LayoutPanelTop;
module.exports.default = LayoutPanelTop;
