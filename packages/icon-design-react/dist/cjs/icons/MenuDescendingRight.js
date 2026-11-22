'use strict';

const { createElement, forwardRef } = require('react');

const MenuDescendingRight = forwardRef(function MenuDescendingRight(
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
    createElement('path', {"d":"M2 4L22 4","key":"0"}),
    createElement('path', {"d":"M9 12L22 12","key":"1"}),
    createElement('path', {"d":"M17 20L22 20","key":"2"})
  );
});

MenuDescendingRight.displayName = 'MenuDescendingRight';

module.exports = MenuDescendingRight;
module.exports.MenuDescendingRight = MenuDescendingRight;
module.exports.default = MenuDescendingRight;
