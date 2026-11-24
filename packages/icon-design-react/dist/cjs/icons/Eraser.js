'use strict';

const { createElement, forwardRef } = require('react');

const Eraser = forwardRef(function Eraser(
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
    createElement('path', {"d":"M15 3L3 15L9 21L21 9Z","key":"0"}),
    createElement('path', {"d":"M7 11L13 17","key":"1"}),
    createElement('path', {"d":"M3 21L20 21","key":"2"})
  );
});

Eraser.displayName = 'Eraser';

module.exports = Eraser;
module.exports.Eraser = Eraser;
module.exports.default = Eraser;
