'use strict';

const { createElement, forwardRef } = require('react');

const MenuSplit = forwardRef(function MenuSplit(
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
    createElement('path', {"d":"M2 12L11 12","key":"1"}),
    createElement('path', {"d":"M16 12L22 12","key":"2"}),
    createElement('path', {"d":"M16 12L22 12","key":"3"}),
    createElement('path', {"d":"M2 20L22 20","key":"4"})
  );
});

MenuSplit.displayName = 'MenuSplit';

module.exports = MenuSplit;
module.exports.MenuSplit = MenuSplit;
module.exports.default = MenuSplit;
