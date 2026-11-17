'use strict';

const { createElement, forwardRef } = require('react');

const CrownTapered = forwardRef(function CrownTapered(
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
    createElement('path', {"d":"M4 16L3 5L8 10L12 4L16 10L21 5L20 16Z","key":"0"}),
    createElement('path', {"d":"M4 20L20 20","key":"1"})
  );
});

CrownTapered.displayName = 'CrownTapered';

module.exports = CrownTapered;
module.exports.CrownTapered = CrownTapered;
module.exports.default = CrownTapered;
