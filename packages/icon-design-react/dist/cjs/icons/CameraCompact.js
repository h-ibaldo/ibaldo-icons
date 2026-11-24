'use strict';

const { createElement, forwardRef } = require('react');

const CameraCompact = forwardRef(function CameraCompact(
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
    createElement('path', {"d":"M19 13.5C19 15.711 17.211 17.5 15 17.5C12.789 17.5 11 15.711 11 13.5C11 11.289 12.789 9.5 15 9.5C17.211 9.5 19 11.289 19 13.5Z","key":"0"}),
    createElement('path', {"d":"M4 21L20 21C21.105 21 22 20.105 22 19L22 8C22 6.895 21.105 6 20 6L4 6C2.895 6 2 6.895 2 8L2 19C2 20.105 2.895 21 4 21Z","key":"1"}),
    createElement('path', {"d":"M5 3L9 3","key":"2"})
  );
});

CameraCompact.displayName = 'CameraCompact';

module.exports = CameraCompact;
module.exports.CameraCompact = CameraCompact;
module.exports.default = CameraCompact;
