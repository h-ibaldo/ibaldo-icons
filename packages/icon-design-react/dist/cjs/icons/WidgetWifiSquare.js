'use strict';

const { createElement, forwardRef } = require('react');

const WidgetWifiSquare = forwardRef(function WidgetWifiSquare(
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
    createElement('path', {"d":"M9 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 15","key":"0"}),
    createElement('path', {"d":"M22 10C22 5.582 18.418 2 14 2","key":"1"}),
    createElement('path', {"d":"M14 22L14 13C14 11.344 12.656 10 11 10L2 10","key":"2"}),
    createElement('path', {"d":"M14 16L2 16","key":"3"}),
    createElement('path', {"d":"M18 10C18 7.789 16.211 6 14 6","key":"4"})
  );
});

WidgetWifiSquare.displayName = 'WidgetWifiSquare';

module.exports = WidgetWifiSquare;
module.exports.WidgetWifiSquare = WidgetWifiSquare;
module.exports.default = WidgetWifiSquare;
