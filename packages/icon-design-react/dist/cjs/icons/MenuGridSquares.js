'use strict';

const { createElement, forwardRef } = require('react');

const MenuGridSquares = forwardRef(function MenuGridSquares(
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
    createElement('rect', {"x":"2.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"0"}),
    createElement('rect', {"x":"10.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"1"}),
    createElement('rect', {"x":"18.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"2"}),
    createElement('rect', {"x":"2.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"3"}),
    createElement('rect', {"x":"10.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"4"}),
    createElement('rect', {"x":"18.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"5"}),
    createElement('rect', {"x":"2.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"6"}),
    createElement('rect', {"x":"10.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"7"}),
    createElement('rect', {"x":"18.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"8"})
  );
});

MenuGridSquares.displayName = 'MenuGridSquares';

module.exports = MenuGridSquares;
module.exports.MenuGridSquares = MenuGridSquares;
module.exports.default = MenuGridSquares;
