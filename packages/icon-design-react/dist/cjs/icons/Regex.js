'use strict';

const { createElement, forwardRef } = require('react');

const Regex = forwardRef(function Regex(
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
    createElement('path', {"d":"M5 16L6 16C7.105 16 8 16.895 8 18L8 19C8 20.105 7.105 21 6 21L5 21C3.895 21 3 20.105 3 19L3 18C3 16.895 3.895 16 5 16Z","key":"0"}),
    createElement('path', {"d":"M13 7.902L22 7.902","key":"1"}),
    createElement('path', {"d":"M15.25 12L19.75 3.805","key":"2"}),
    createElement('path', {"d":"M19.75 12L15.25 3.805","key":"3"})
  );
});

Regex.displayName = 'Regex';

module.exports = Regex;
module.exports.Regex = Regex;
module.exports.default = Regex;
