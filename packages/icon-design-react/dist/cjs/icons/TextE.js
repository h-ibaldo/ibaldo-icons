'use strict';

const { createElement, forwardRef } = require('react');

const TextE = forwardRef(function TextE(
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
    createElement('path', {"d":"M19 22.023L5 22.023L5 2L18.039 2","key":"0"}),
    createElement('path', {"d":"M6 11L16 11","key":"1"})
  );
});

TextE.displayName = 'TextE';

module.exports = TextE;
module.exports.TextE = TextE;
module.exports.default = TextE;
