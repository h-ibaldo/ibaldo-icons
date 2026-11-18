'use strict';

const { createElement, forwardRef } = require('react');

const TrayStackXFlat = forwardRef(function TrayStackXFlat(
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
    createElement('path', {"d":"M14 13L10 17","key":"3"}),
    createElement('path', {"d":"M14 17L10 13","key":"4"})
  );
});

TrayStackXFlat.displayName = 'TrayStackXFlat';

module.exports = TrayStackXFlat;
module.exports.TrayStackXFlat = TrayStackXFlat;
module.exports.default = TrayStackXFlat;
