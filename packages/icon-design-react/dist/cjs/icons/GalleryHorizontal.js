'use strict';

const { createElement, forwardRef } = require('react');

const GalleryHorizontal = forwardRef(function GalleryHorizontal(
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
    createElement('path', {"d":"M2 22L2 2","key":"0"}),
    createElement('path', {"d":"M22 22L22 2","key":"1"}),
    createElement('path', {"d":"M17 4L17 20C17 21.105 16.105 22 15 22L9 22C7.895 22 7 21.105 7 20L7 4C7 2.895 7.895 2 9 2L15 2C16.105 2 17 2.895 17 4Z","key":"2"})
  );
});

GalleryHorizontal.displayName = 'GalleryHorizontal';

module.exports = GalleryHorizontal;
module.exports.GalleryHorizontal = GalleryHorizontal;
module.exports.default = GalleryHorizontal;
