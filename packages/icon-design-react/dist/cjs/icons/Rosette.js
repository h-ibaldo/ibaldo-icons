'use strict';

const { createElement, forwardRef } = require('react');

const Rosette = forwardRef(function Rosette(
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
    createElement('path', {"d":"M17 11L19 9L17 7L17 4L14 4L12 2L10 4L7 4L7 7L5 9L7 11L7 14L10 14L12 16L14 14L17 14Z","key":"0"}),
    createElement('path', {"d":"M8 14.465L8 22L12 20L16 22L16 14.465","key":"1"})
  );
});

Rosette.displayName = 'Rosette';

module.exports = Rosette;
module.exports.Rosette = Rosette;
module.exports.default = Rosette;
