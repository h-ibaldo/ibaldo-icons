'use strict';

const { createElement, forwardRef } = require('react');

const Brackets = forwardRef(function Brackets(
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
    createElement('path', {"d":"M8 8L4 12L8 16","key":"0"}),
    createElement('path', {"d":"M16 8L20 12L16 16","key":"1"})
  );
});

Brackets.displayName = 'Brackets';

module.exports = Brackets;
module.exports.Brackets = Brackets;
module.exports.default = Brackets;
