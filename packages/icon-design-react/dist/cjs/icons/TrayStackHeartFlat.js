'use strict';

const { createElement, forwardRef } = require('react');

const TrayStackHeartFlat = forwardRef(function TrayStackHeartFlat(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M4 5L20 5","key":"1"}),
    createElement('path', {"d":"M6 2L18 2","key":"2"}),
    createElement('path', {"d":"M11.414 18.293L8.621 15.5C7.793 14.672 7.793 13.328 8.621 12.5C9.449 11.672 10.793 11.672 11.621 12.5L12.121 13L12.621 12.5C13.449 11.672 14.793 11.672 15.621 12.5C16.449 13.328 16.449 14.672 15.621 15.5L12.828 18.293C12.438 18.684 11.805 18.684 11.414 18.293Z","key":"3"})
  );
});

TrayStackHeartFlat.displayName = 'TrayStackHeartFlat';

module.exports = TrayStackHeartFlat;
module.exports.TrayStackHeartFlat = TrayStackHeartFlat;
module.exports.default = TrayStackHeartFlat;
