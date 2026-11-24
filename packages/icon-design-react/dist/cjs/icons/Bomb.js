'use strict';

const { createElement, forwardRef } = require('react');

const Bomb = forwardRef(function Bomb(
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
    createElement('path', {"d":"M16 15C16 11.133 12.867 8 9 8C5.133 8 2 11.133 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15Z","key":"0"}),
    createElement('path', {"d":"M14 10L16 8","key":"1"}),
    createElement('path', {"d":"M19 5L21 3","key":"2"}),
    createElement('path', {"d":"M14 2L15 4","key":"3"}),
    createElement('path', {"d":"M20 9L22 10","key":"4"})
  );
});

Bomb.displayName = 'Bomb';

module.exports = Bomb;
module.exports.Bomb = Bomb;
module.exports.default = Bomb;
