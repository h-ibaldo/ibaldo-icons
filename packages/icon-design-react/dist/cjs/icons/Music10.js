'use strict';

const { createElement, forwardRef } = require('react');

const Music10 = forwardRef(function Music10(
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
    createElement('ellipse', {"cx":"8","cy":"18.499999499998012","rx":"4","ry":"3.500000500000169","key":"0"}),
    createElement('path', {"d":"M21,11.999998999997842v-1.000002998709533c0-2.209137342500981-1.790859657388864-3.999997000149961-3.999996999889845-3.999997000470103h-.000009000001228c-2.761420435617765-.000000000389264-4.999994000108927-2.238573565038678-4.999994000108927-4.999994000820152v-.000004999999874,16.5","key":"1"})
  );
});

Music10.displayName = 'Music10';

module.exports = Music10;
module.exports.Music10 = Music10;
module.exports.default = Music10;
