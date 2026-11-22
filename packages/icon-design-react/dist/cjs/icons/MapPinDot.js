'use strict';

const { createElement, forwardRef } = require('react');

const MapPinDot = forwardRef(function MapPinDot(
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
    createElement('path', {"d":"M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z","key":"0"}),
    createElement('path', {"d":"M11 8C11 7.449 11.449 7 12 7C12.551 7 13 7.449 13 8C13 8.551 12.551 9 12 9C11.449 9 11 8.551 11 8Z","key":"1"})
  );
});

MapPinDot.displayName = 'MapPinDot';

module.exports = MapPinDot;
module.exports.MapPinDot = MapPinDot;
module.exports.default = MapPinDot;
