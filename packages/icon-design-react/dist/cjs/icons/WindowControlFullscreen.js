'use strict';

const { createElement, forwardRef } = require('react');

const WindowControlFullscreen = forwardRef(function WindowControlFullscreen(
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
    createElement('polyline', {"points":"1.949462882913394 8.998779299525268 1.949462882913394 1.998779299525268 8.949462882913394 1.998779299525268","key":"0"}),
    createElement('polyline', {"points":"21.949462883221713 14.998781724209039 21.949462883221713 21.998778260107429 14.949466347312409 21.998778260107429","key":"1"})
  );
});

WindowControlFullscreen.displayName = 'WindowControlFullscreen';

module.exports = WindowControlFullscreen;
module.exports.WindowControlFullscreen = WindowControlFullscreen;
module.exports.default = WindowControlFullscreen;
