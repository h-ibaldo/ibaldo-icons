'use strict';

const { createElement, forwardRef } = require('react');

const MenuDots2 = forwardRef(function MenuDots2(
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
    createElement('line', {"x1":"12.035268553439892","y1":"2.999996485714291","x2":"12.025268553439673","y2":"2.999996485714291","key":"0"}),
    createElement('line', {"x1":"12.035268553439892","y1":"11.999996485714291","x2":"12.025268553439673","y2":"11.999996485714291","key":"1"}),
    createElement('line', {"x1":"12.035268553439892","y1":"20.999996485714291","x2":"12.025268553439673","y2":"20.999996485714291","key":"2"})
  );
});

MenuDots2.displayName = 'MenuDots2';

module.exports = MenuDots2;
module.exports.MenuDots2 = MenuDots2;
module.exports.default = MenuDots2;
