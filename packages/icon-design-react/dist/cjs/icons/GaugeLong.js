'use strict';

const { createElement, forwardRef } = require('react');

const GaugeLong = forwardRef(function GaugeLong(
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
    createElement('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"0"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"}),
    createElement('path', {"d":"M16.5 7.5L13.414 10.586","key":"2"}),
    createElement('path', {"d":"M10.586 13.414L9 15","key":"3"})
  );
});

GaugeLong.displayName = 'GaugeLong';

module.exports = GaugeLong;
module.exports.GaugeLong = GaugeLong;
module.exports.default = GaugeLong;
