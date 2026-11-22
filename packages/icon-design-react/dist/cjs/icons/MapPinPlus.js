'use strict';

const { createElement, forwardRef } = require('react');

const MapPinPlus = forwardRef(function MapPinPlus(
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
    createElement('path', {"d":"M12 5L12 11","key":"1"}),
    createElement('path', {"d":"M15 8L9 8","key":"2"})
  );
});

MapPinPlus.displayName = 'MapPinPlus';

module.exports = MapPinPlus;
module.exports.MapPinPlus = MapPinPlus;
module.exports.default = MapPinPlus;
