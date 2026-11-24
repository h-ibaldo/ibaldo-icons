'use strict';

const { createElement, forwardRef } = require('react');

const PaintbrushVerticalDipped = forwardRef(function PaintbrushVerticalDipped(
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
    createElement('path', {"d":"M5 12L19 12L19 2L5 2Z","key":"0"}),
    createElement('path', {"d":"M4 14L4 12L20 12L20 14C20 15.105 19.105 16 18 16L14 16L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 16L6 16C4.895 16 4 15.105 4 14Z","key":"1"}),
    createElement('path', {"d":"M5 5L19 9","key":"2"})
  );
});

PaintbrushVerticalDipped.displayName = 'PaintbrushVerticalDipped';

module.exports = PaintbrushVerticalDipped;
module.exports.PaintbrushVerticalDipped = PaintbrushVerticalDipped;
module.exports.default = PaintbrushVerticalDipped;
