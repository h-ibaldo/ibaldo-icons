'use strict';

const { createElement, forwardRef } = require('react');

const Image3 = forwardRef(function Image3(
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
    createElement('rect', {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M21.999999993269739,16.998779299956368l-4.392665331550234-6.58899799732535c-.776369216850071-1.164553825281473-2.478055215178756-1.191993237254792-3.29156753109055-.053075994987012l-3.315767137359217,4.642073992312362-2.451389735069824-2.4513897350771c-.831601915040665-.831601915040665-2.197759123679134-.769631634419056-2.950656121569409.133844763044181l-3.597954143360766,4.31754497203292","key":"1"})
  );
});

Image3.displayName = 'Image3';

module.exports = Image3;
module.exports.Image3 = Image3;
module.exports.default = Image3;
