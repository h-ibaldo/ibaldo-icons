'use strict';

const { createElement, forwardRef } = require('react');

const MenuHamburgerCircle = forwardRef(function MenuHamburgerCircle(
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
    createElement('circle', {"cx":"12.000000004889444","cy":"11.999999995256076","r":"10","key":"0"}),
    createElement('line', {"x1":"8.000000004889444","y1":"7.999999995256076","x2":"16.000000004889444","y2":"7.999999995256076","key":"1"}),
    createElement('line', {"x1":"8.000000004889444","y1":"11.999999995256076","x2":"16.000000004889444","y2":"11.999999995256076","key":"2"}),
    createElement('line', {"x1":"8.000000004889444","y1":"15.999999995256076","x2":"16.000000004889444","y2":"15.999999995256076","key":"3"})
  );
});

MenuHamburgerCircle.displayName = 'MenuHamburgerCircle';

module.exports = MenuHamburgerCircle;
module.exports.MenuHamburgerCircle = MenuHamburgerCircle;
module.exports.default = MenuHamburgerCircle;
