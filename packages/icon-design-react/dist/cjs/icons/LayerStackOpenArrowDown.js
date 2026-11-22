'use strict';

const { createElement, forwardRef } = require('react');

const LayerStackOpenArrowDown = forwardRef(function LayerStackOpenArrowDown(
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
    createElement('path', {"d":"M12 12L2 7L12 2L22 7Z","key":"0"}),
    createElement('path', {"d":"M7 9.5L2 12L12 17","key":"1"}),
    createElement('path', {"d":"M22 12L17 9.5","key":"2"}),
    createElement('path', {"d":"M7 14.5L2 17L12 22","key":"3"}),
    createElement('path', {"d":"M22 19L19 22L16 19","key":"4"}),
    createElement('path', {"d":"M19 22L19 15","key":"5"})
  );
});

LayerStackOpenArrowDown.displayName = 'LayerStackOpenArrowDown';

module.exports = LayerStackOpenArrowDown;
module.exports.LayerStackOpenArrowDown = LayerStackOpenArrowDown;
module.exports.default = LayerStackOpenArrowDown;
