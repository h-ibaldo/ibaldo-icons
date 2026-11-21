'use strict';

const { createElement, forwardRef } = require('react');

const ComputerTower = forwardRef(function ComputerTower(
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
    createElement('path', {"d":"M6 2L18 2L18 22L6 22Z","key":"0"}),
    createElement('path', {"d":"M9 6L15 6","key":"1"}),
    createElement('path', {"d":"M9 9L15 9","key":"2"}),
    createElement('path', {"d":"M9 12L15 12","key":"3"}),
    createElement('path', {"d":"M12 17L12 18","key":"4"})
  );
});

ComputerTower.displayName = 'ComputerTower';

module.exports = ComputerTower;
module.exports.ComputerTower = ComputerTower;
module.exports.default = ComputerTower;
