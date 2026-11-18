'use strict';

const { createElement, forwardRef } = require('react');

const VolumeTranslate = forwardRef(function VolumeTranslate(
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
    createElement('path', {"d":"M2 10L2 14C2 14.555 2.445 15 3 15L5 15L9.293 19.293C9.922 19.922 11 19.477 11 18.586L11 5.414C11 4.523 9.922 4.078 9.293 4.707L5 9L3 9C2.445 9 2 9.445 2 10Z","key":"0"}),
    createElement('path', {"d":"M14 10L22 10","key":"1"}),
    createElement('path', {"d":"M18 8L18 10","key":"2"}),
    createElement('path', {"d":"M14.5 16C17.922 16 20.719 13.355 20.977 10","key":"3"}),
    createElement('path', {"d":"M16.008 13C17.16 14.805 19.176 16 21.477 16","key":"4"})
  );
});

VolumeTranslate.displayName = 'VolumeTranslate';

module.exports = VolumeTranslate;
module.exports.VolumeTranslate = VolumeTranslate;
module.exports.default = VolumeTranslate;
