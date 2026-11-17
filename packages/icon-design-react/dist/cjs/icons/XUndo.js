'use strict';

const { createElement, forwardRef } = require('react');

const XUndo = forwardRef(function XUndo(
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
    createElement('line', {"x1":"2.999999990790457","y1":"15.000000000448381","x2":"14.999999990790457","y2":"3.000000000741238","key":"0"}),
    createElement('line', {"x1":"10.999999990790457","y1":"11.000000000448381","x2":"2.99999999109059","y2":"3.000000000448381","key":"1"}),
    createElement('polyline', {"points":"16.999999990079232 17.000000000446562 13.999999990079232 14.000000000446562 16.999999990079232 11.000000000446562","key":"2"}),
    createElement('path', {"d":"M11.999999990799552,21.000000000446562h5.500003499280865c1.932994691409476,0,3.499996499998815-1.567001808591158,3.499996499998815-3.499996500000634v-.000007000000551c0-1.932994691410386-1.567001808589339-3.499996499998815-3.499996499998815-3.499996499998815h-3.500003500001185","key":"3"})
  );
});

XUndo.displayName = 'XUndo';

module.exports = XUndo;
module.exports.XUndo = XUndo;
module.exports.default = XUndo;
