'use strict';

const { createElement, forwardRef } = require('react');

const MapPinEdit = forwardRef(function MapPinEdit(
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
    createElement('path', {"d":"M21.414 10.586L21.586 10.758C22.367 11.539 22.367 12.805 21.586 13.586L15 20.172L12 20.172L12 17.172L18.586 10.586C19.367 9.805 20.633 9.805 21.414 10.586Z","key":"0"}),
    createElement('path', {"d":"M17 12.172L20 15.172","key":"1"}),
    createElement('path', {"d":"M7 8C7 6.895 7.895 6 9 6C10.105 6 11 6.895 11 8C11 9.105 10.105 10 9 10C7.895 10 7 9.105 7 8Z","key":"2"}),
    createElement('path', {"d":"M9 22.004L3.5 11.691C2.035 8.945 2.656 5.551 5 3.504C7.289 1.5 10.711 1.5 13 3.504C14.855 5.125 15.629 7.594 15.145 9.914","key":"3"})
  );
});

MapPinEdit.displayName = 'MapPinEdit';

module.exports = MapPinEdit;
module.exports.MapPinEdit = MapPinEdit;
module.exports.default = MapPinEdit;
