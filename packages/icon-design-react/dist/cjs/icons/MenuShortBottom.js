'use strict';

const { createElement, forwardRef } = require('react');

const MenuShortBottom = forwardRef(function MenuShortBottom(
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
    createElement('line', {"x1":"4.000000004889444","y1":"11.999999995256076","x2":"20.000000004889444","y2":"11.999999995256076","key":"0"}),
    createElement('line', {"x1":"4.000000004889444","y1":"4.999999995256076","x2":"20.000000004889444","y2":"4.999999995256076","key":"1"}),
    createElement('line', {"x1":"4.000000004889444","y1":"18.999999995256076","x2":"15.000000004889444","y2":"18.999999995256076","key":"2"})
  );
});

MenuShortBottom.displayName = 'MenuShortBottom';

module.exports = MenuShortBottom;
module.exports.MenuShortBottom = MenuShortBottom;
module.exports.default = MenuShortBottom;
