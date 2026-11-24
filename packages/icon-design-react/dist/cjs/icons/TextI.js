'use strict';

const { createElement, forwardRef } = require('react');

const TextI = forwardRef(function TextI(
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
    createElement('path', {"d":"M12 2.023L12 22","key":"0"})
  );
});

TextI.displayName = 'TextI';

module.exports = TextI;
module.exports.TextI = TextI;
module.exports.default = TextI;
