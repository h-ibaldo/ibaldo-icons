'use strict';

const { createElement, forwardRef } = require('react');

const MenuTwoStripes1 = forwardRef(function MenuTwoStripes1(
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
    createElement('line', {"x1":"2","y1":"8.000000078527592","x2":"22","y2":"8.000000078527592","key":"0"}),
    createElement('line', {"x1":"2","y1":"16.000000078527592","x2":"22","y2":"16.000000078527592","key":"1"})
  );
});

MenuTwoStripes1.displayName = 'MenuTwoStripes1';

module.exports = MenuTwoStripes1;
module.exports.MenuTwoStripes1 = MenuTwoStripes1;
module.exports.default = MenuTwoStripes1;
