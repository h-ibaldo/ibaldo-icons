'use strict';

const { createElement, forwardRef } = require('react');

const TrayLinesTall = forwardRef(function TrayLinesTall(
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
    createElement('path', {"d":"M3 14L3 20C3 21.105 3.895 22 5 22L19 22C20.105 22 21 21.105 21 20L21 14","key":"0"}),
    createElement('path', {"d":"M7 17L17 17","key":"1"}),
    createElement('path', {"d":"M7 12L17 12","key":"2"}),
    createElement('path', {"d":"M7 7L17 7","key":"3"}),
    createElement('path', {"d":"M7 2L17 2","key":"4"})
  );
});

TrayLinesTall.displayName = 'TrayLinesTall';

module.exports = TrayLinesTall;
module.exports.TrayLinesTall = TrayLinesTall;
module.exports.default = TrayLinesTall;
