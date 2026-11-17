'use strict';

const { createElement, forwardRef } = require('react');

const MusicNoteFlagSquare = forwardRef(function MusicNoteFlagSquare(
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
    createElement('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement('polyline', {"points":"12 6.999999999998181 20 6.999999999998181 20 1.999999999998181 12 1.999999999998181 12 17.999999999998181","key":"1"})
  );
});

MusicNoteFlagSquare.displayName = 'MusicNoteFlagSquare';

module.exports = MusicNoteFlagSquare;
module.exports.MusicNoteFlagSquare = MusicNoteFlagSquare;
module.exports.default = MusicNoteFlagSquare;
