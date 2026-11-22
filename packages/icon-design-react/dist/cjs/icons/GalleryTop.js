'use strict';

const { createElement, forwardRef } = require('react');

const GalleryTop = forwardRef(function GalleryTop(
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
    createElement('path', {"d":"M5 7L19 7","key":"0"}),
    createElement('path', {"d":"M7 2L17 2","key":"1"}),
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 14C2 12.895 2.895 12 4 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22Z","key":"2"})
  );
});

GalleryTop.displayName = 'GalleryTop';

module.exports = GalleryTop;
module.exports.GalleryTop = GalleryTop;
module.exports.default = GalleryTop;
