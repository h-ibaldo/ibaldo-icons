'use strict';

const { createElement, forwardRef } = require('react');

const MapPinXCorner = forwardRef(function MapPinXCorner(
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
    createElement('path', {"d":"M8 8C8 6.895 8.895 6 10 6C11.105 6 12 6.895 12 8C12 9.105 11.105 10 10 10C8.895 10 8 9.105 8 8Z","key":"0"}),
    createElement('path', {"d":"M21 21L17 17","key":"1"}),
    createElement('path', {"d":"M21 17L17 21","key":"2"}),
    createElement('path', {"d":"M10 22.004L4.5 11.691C3.035 8.945 3.656 5.551 6 3.504C8.289 1.5 11.711 1.5 14 3.504C16.344 5.551 16.965 8.945 15.5 11.691Z","key":"3"})
  );
});

MapPinXCorner.displayName = 'MapPinXCorner';

module.exports = MapPinXCorner;
module.exports.MapPinXCorner = MapPinXCorner;
module.exports.default = MapPinXCorner;
