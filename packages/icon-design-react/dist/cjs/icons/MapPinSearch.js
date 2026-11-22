'use strict';

const { createElement, forwardRef } = require('react');

const MapPinSearch = forwardRef(function MapPinSearch(
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
    createElement('path', {"d":"M19 10C19 12.211 17.211 14 15 14C12.789 14 11 12.211 11 10C11 7.789 12.789 6 15 6C17.211 6 19 7.789 19 10Z","key":"0"}),
    createElement('path', {"d":"M19 10C19 12.211 17.211 14 15 14C12.789 14 11 12.211 11 10C11 7.789 12.789 6 15 6C17.211 6 19 7.789 19 10Z","key":"1"}),
    createElement('path', {"d":"M17.828 12.828L21 16","key":"2"}),
    createElement('path', {"d":"M12.254 16.441L9.285 22L3.789 11.691C2.324 8.941 2.945 5.551 5.285 3.5C7.492 1.57 10.742 1.5 13.023 3.281","key":"3"})
  );
});

MapPinSearch.displayName = 'MapPinSearch';

module.exports = MapPinSearch;
module.exports.MapPinSearch = MapPinSearch;
module.exports.default = MapPinSearch;
