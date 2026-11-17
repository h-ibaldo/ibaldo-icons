'use strict';

const { createElement, forwardRef } = require('react');

const MenuThreeStripes2 = forwardRef(function MenuThreeStripes2(
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
    createElement('line', {"x1":"7","y1":"11.999999999998181","x2":"17","y2":"11.999999999998181","key":"0"}),
    createElement('line', {"x1":"7","y1":"2.999999999998181","x2":"17","y2":"2.999999999998181","key":"1"}),
    createElement('line', {"x1":"7","y1":"20.999999999998181","x2":"17","y2":"20.999999999998181","key":"2"})
  );
});

MenuThreeStripes2.displayName = 'MenuThreeStripes2';

module.exports = MenuThreeStripes2;
module.exports.MenuThreeStripes2 = MenuThreeStripes2;
module.exports.default = MenuThreeStripes2;
